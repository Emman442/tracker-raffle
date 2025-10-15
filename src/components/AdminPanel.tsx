"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgram } from "@/hooks/use-program";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
  ADMIN,
  TOKEN_METADATA_PROGRAM_ID,
  TOKEN_MINT_DECIMALS,
} from "@/constants/constants";
import { toast } from "sonner";
import {  PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { usePostData } from "@/hooks/usePostWinners";
import { toLocalDateTimeString } from "../../helpers/toIsoString";

export default function AdminPanel() {
  // Wallet and connection
  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const { program, provider } = useProgram();
  const { mutate, isPending } = usePostData();
  // Local states
  const [isInitializing, setIsInitializing] = useState(false);
  const [isInitializingLottery, setIsInitializingLottery] = useState(false);
  const [isCommittingWinner, setIsCommittingWinner] = useState(false);
  const [lotteryData, setLotteryData] = useState<any>(null);
  const [config, setConfig] = useState({
    startTime: Math.floor(Date.now() / 1000),
    endTime: Math.floor((Date.now() + 86400000) / 1000),
    prize: 0,
  });

  const [tokenLotteryPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("token_lottery")],
    program?.programId ?? PublicKey.default
  );

  useEffect(() => {
    const fetchLotteryData = async () => {
      if (!program || !publicKey) return;

      try {
        // Fetch the TokenLottery account
        const tokenLottery = await program.account.tokenLottery.fetch(
          tokenLotteryPda
        );
        setLotteryData(tokenLottery);
      } catch (err) {
        console.error("Error fetching lottery or token account:", err);
      }
    };

    fetchLotteryData();
  }, [program, publicKey, connection]);

  // Handlers
  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Derived accounts
  const mint = program
    ? anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("collection_mint"),
          new anchor.BN(lotteryData?.roundId).toArrayLike(Buffer, "le", 8),
        ],
        program.programId
      )[0]
    : null;

  const metadata =
    program && mint
      ? anchor.web3.PublicKey.findProgramAddressSync(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
          ],
          TOKEN_METADATA_PROGRAM_ID
        )[0]
      : null;

  const masterEdition =
    program && mint
      ? anchor.web3.PublicKey.findProgramAddressSync(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            mint.toBuffer(),
            Buffer.from("edition"),
          ],
          TOKEN_METADATA_PROGRAM_ID
        )[0]
      : null;

  // === UI Render ===
  if (!connected) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Access Denied</CardTitle>
          <CardDescription>
            Please connect your wallet to access the admin panel.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  if (publicKey?.toBase58() !== ADMIN.toBase58()) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Access Denied</CardTitle>
          <CardDescription>
            You do not have permission to access the admin panel.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (!program || !mint || !metadata || !masterEdition) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-8 w-8" />
        <span className="ml-2">Loading program...</span>
      </div>
    );
  }

  const handleInitializeConfig = async () => {
    if (!program) return;
    if (!config.startTime || !config.endTime || !config.prize) {
      toast.error("Please fill in all configuration fields");
      return;
    }

    try {
      setIsInitializing(true);

      const tx = await program.methods
        .initializeConfig(
          new anchor.BN(config.startTime),
          new anchor.BN(config.endTime),
          new anchor.BN(config.prize * 10 ** TOKEN_MINT_DECIMALS)
        )
        .accounts({
          //@ts-ignore
          masterEdition: masterEdition,
          metadata: metadata,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const txDetails = await connection.getTransaction(tx, {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0,
      });

      if (!txDetails) {
        throw new Error("Transaction not found or not confirmed");
      }

      toast.success("Configuration initialized successfully!", {
        cancel: {
          label: "View Transaction",
          onClick: () =>
            window.open(`https://solscan.io/tx/${tx}?cluster=devnet`, "_blank"),
        },
      });
    } catch (err) {
      console.error("Error Initializing Config:", err);
      toast.error(
        "Failed to initialize configuration: " + (err as Error).message
      );
    } finally {
      setIsInitializing(false);
    }
  };
  const handleReInitializeConfig = async () => {
    if (!program) return;
    if (!config.startTime || !config.endTime || !config.prize) {
      toast.error("Please fill in all configuration fields");
      return;
    }

    try {
      setIsInitializing(true);

      const tx = await program.methods
        .restartLottery(
          new anchor.BN(config.startTime),
          new anchor.BN(config.endTime),
          new anchor.BN(config.prize * 10 ** TOKEN_MINT_DECIMALS)
        )
        .accounts({
          //@ts-ignore
          masterEdition: masterEdition,
          metadata: metadata,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const txDetails = await connection.getTransaction(tx, {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0,
      });

      if (!txDetails) {
        throw new Error("Transaction not found or not confirmed");
      }

      toast.success("Configuration initialized successfully!", {
        cancel: {
          label: "View Transaction",
          onClick: () =>
            window.open(`https://solscan.io/tx/${tx}?cluster=devnet`, "_blank"),
        },
      });
    } catch (err) {
      console.error("Error Initializing Config:", err);
      toast.error(
        "Failed to initialize configuration: " + (err as Error).message
      );
    } finally {
      setIsInitializing(false);
    }
  };

  const handleInitializeLottery = async () => {
    if (!program) return;

    try {
      setIsInitializingLottery(true);

      // ✅ CRITICAL: Fetch fresh lottery data to get current round_id
      const freshLotteryData = await program.account.tokenLottery.fetch(
        tokenLotteryPda
      );

      // Derive collection mint using the CURRENT round_id
      const [collectionMint] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("collection_mint"),
          new anchor.BN(freshLotteryData.roundId).toArrayLike(Buffer, "le", 8),
        ],
        program.programId
      );

      const collectionTokenAccount = getAssociatedTokenAddressSync(
        collectionMint,
        collectionMint,
        true
      );

      const [metadata] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          collectionMint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      );

      const [masterEdition] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          collectionMint.toBuffer(),
          Buffer.from("edition"),
        ],
        TOKEN_METADATA_PROGRAM_ID
      );

      const tx = await program.methods
        .initializeLottery()
        .accounts({
          //@ts-ignore
          tokenLottery: tokenLotteryPda,
          collectionMint,
          collectionTokenAccount,
          metadata,
          masterEdition,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const txDetails = await connection.getTransaction(tx, {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0,
      });

      if (!txDetails) {
        throw new Error("Transaction not found or not confirmed");
      }

      // Refresh lottery data after successful initialization
      const updated = await program.account.tokenLottery.fetch(tokenLotteryPda);
      setLotteryData(updated);

      toast.success("Lottery initialized successfully!", {
        cancel: {
          label: "View Transaction",
          onClick: () =>
            window.open(`https://solscan.io/tx/${tx}?cluster=devnet`, "_blank"),
        },
      });
    } catch (err) {
      console.error("Error Initializing Lottery:", err);
      toast.error("Failed to initialize lottery: " + (err as Error).message);
    } finally {
      setIsInitializingLottery(false);
    }
  };

  const handleDrawWinner = async () => {
    if (!program || !publicKey) {
      toast.error("Please connect your wallet");
      return;
    }

    try {
      setIsCommittingWinner(true);
      toast.info("Generating randomness...");

      // 3. Build your program's commit instruction
      const commitTx = await program.methods
        .commitWinner(0)
        .accounts({
          payer: publicKey,
        })
        .rpc();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const txDetails = await connection.getTransaction(commitTx, {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0,
      });

      if (!txDetails) {
        throw new Error("Transaction not found or not confirmed");
      }

      const logs = txDetails?.meta?.logMessages;
      const eventLog = logs?.find((l) => l.startsWith("Program data:"));

      if (eventLog) {
        const encoded = eventLog.replace("Program data: ", "");
        const decoded = program.coder.events.decode(encoded);

        if (decoded?.name === "winnerCommited") {
          toast.success("Winner Drawn Successfully!", {
            cancel: {
              label: "View Transaction",
              onClick: () =>
                window.open(`https://solscan.io/tx/${commitTx}`, "_blank"),
            },
          });
          return;
        }

        const updated = await program.account.tokenLottery.fetch(
          tokenLotteryPda
        );
        if (updated.winnerChosen) {
          // Derive the winning ticket mint PDA
          const [ticketMint] = anchor.web3.PublicKey.findProgramAddressSync(
            [
              Buffer.from(
                new anchor.BN(lotteryData.winner).toArrayLike(Buffer, "le", 8)
              ),
            ],
            program.programId
          );
          // Compute user's associated token account (ATA)
          const ata = getAssociatedTokenAddressSync(ticketMint, publicKey);

          mutate({ user: ata.toString(), amount: lotteryData.potAmount });
        }
      }
    } catch (err) {
      console.error("Error committing winner:", err);
      toast.error("Failed to commit winner: " + (err as Error).message);
    } finally {
      setIsCommittingWinner(false);
    }
  };

  const currentTime = Date.now() / 1000;
  
  // Check if lottery exists and is active
  const isLotteryActive =
    lotteryData &&
    lotteryData.startTime &&
    lotteryData.endTime &&
    currentTime >= lotteryData.startTime.toNumber() &&
    currentTime < lotteryData.endTime.toNumber();

  // Check if lottery has ended
  const hasLotteryEnded =
    lotteryData &&
    lotteryData.endTime &&
    currentTime >= lotteryData.endTime.toNumber();

  console.log("Current Config:", lotteryData);

  // Determine button state for Initialize Config button
  const getInitButtonState = () => {
    if (isInitializing) {
      return {
        disabled: true,
        text: (
          <>
            <Loader2 className="animate-spin mr-2" />
            Initializing...
          </>
        ),
        onClick: () => {},
      };
    }

    if (isLotteryActive) {
      return {
        disabled: true,
        text: "Lottery ongoing — please wait...",
        onClick: () => {},
      };
    }

    if (hasLotteryEnded) {
      return {
        disabled: false,
        text: "Re-Initialize Config",
        onClick: handleReInitializeConfig,
      };
    }

    // No lottery exists
    return {
      disabled: false,
      text: "Initialize Config",
      onClick: handleInitializeConfig,
    };
  };

  const buttonState = getInitButtonState();

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-8">Lottery Admin Panel</h1> */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Config */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>1. Initialize Config</CardTitle>
              <CardDescription>
                Set the parameters for a new lottery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  name="startTime"
                  type="datetime-local"
                  value={toLocalDateTimeString(config.startTime)}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      startTime: Math.floor(
                        new Date(e.target.value).getTime() / 1000
                      ),
                    }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  name="endTime"
                  type="datetime-local"
                  value={toLocalDateTimeString(config.endTime)}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      endTime: Math.floor(
                        new Date(e.target.value).getTime() / 1000
                      ),
                    }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prize">Prize ($TRACKER)</Label>
                <Input
                  id="prize"
                  name="prize"
                  type="number"
                  step="0.01"
                  value={config.prize}
                  onChange={handleConfigChange}
                />
              </div>
              <Button
                onClick={buttonState.onClick}
                disabled={buttonState.disabled}
                className="w-full"
              >
                {buttonState.text}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Lottery */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>2. Initialize Lottery</CardTitle>
              <CardDescription>
                Creates a new lottery instance based on the current config.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleInitializeLottery}
                disabled={isInitializingLottery}
                className="w-full"
              >
                {isInitializingLottery ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Initializing...
                  </>
                ) : (
                  "Initialize Lottery"
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Randomness */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>3. Draw Winner</CardTitle>
              <CardDescription>
                Commit to magicblock randomness for winner selection.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleDrawWinner}
                disabled={isCommittingWinner}
                className="w-full"
              >
                {isCommittingWinner ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Drawing winner...
                  </>
                ) : (
                  "Draw Winner"
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}