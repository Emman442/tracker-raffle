"use client";

// import { useLottery } from "@/hooks/useLottery";
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
import { useState } from "react";
import * as anchor from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import { TOKEN_METADATA_PROGRAM_ID } from "@/constants/constants";
import { toast } from "sonner";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function AdminPanel() {
  const { connected } = useWallet();
  const {connection } = useConnection();
  const [loading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isInitializingLottery, setIsInitializingLottery] = useState(false);
  const [isCommitingWinner, setIsCommitingWinner] = useState(false);
  const [isChoosingWinner, setIsChoosingWinner] = useState(false);
  const [config, setConfig] = useState({
    startTime: Date.now(),
    endTime: Date.now() + 86400000,
    prize: 0,
  });
  const { program, provider } = useProgram();
  const lotteryData = {
    isWinnerChosen: false,
    randomnessPending: false,
  };

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

  // if (!isAuthority) {
  //   return <Card className="max-w-md mx-auto"><CardHeader><CardTitle>Access Denied</CardTitle><CardDescription>Your wallet does not have authority permissions.</CardDescription></CardHeader></Card>;
  // }

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!program) {
    return <div>Program Not Loaded yet </div>;
  }

  const mint = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("collection_mint")],
    program.programId
  )[0];

  const metadata = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  )[0];

  const masterEdition = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata"),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mint.toBuffer(),
      Buffer.from("edition"),
    ],
    TOKEN_METADATA_PROGRAM_ID
  )[0];

  const handleInitializeConfig = async () => {
    if (!program) return;
    if (!config.startTime || !config.endTime || !config.prize) return;
    console.log(config)
    try {
      setIsInitializing(true);

      const tx = await program.methods
        .initializeConfig(
          new anchor.BN(config.startTime),
          new anchor.BN(config.endTime),
          new anchor.BN(config.prize * LAMPORTS_PER_SOL)
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

      const logs = txDetails?.meta?.logMessages;
      const eventLog = logs?.find((l) => l.startsWith("Program data:"));

      if (eventLog) {
        const encoded = eventLog.replace("Program data: ", "");
        const decoded = program.coder.events.decode(encoded);

        if (decoded?.name === "initializedConfig") {
          toast.success("Configurations initialized sccessfully!", {
            cancel: {
              label: "View Transaction",
              onClick: () =>
                window.open(`https://solscan.io/tx/${tx}`, "_blank"),
            },
          });
          // Refresh pool details
          // fetchPoolDetails();
          // setFundAmount(0);
          return;
        }
      }
    } catch (err) {
      console.error("Error Initializing Config:", err);
      toast.error("Something went wrong while Initializing the configuration");
    } finally {
      setIsInitializing(false);
    }
  };

  const handleInitializeLottery = async () => {
    if (!program) return;
    try {
      setIsInitializingLottery(true);

      const tx = await program.methods
        .initializeLottery()
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

      const logs = txDetails?.meta?.logMessages;
      const eventLog = logs?.find((l) => l.startsWith("Program data:"));

      if (eventLog) {
        const encoded = eventLog.replace("Program data: ", "");
        const decoded = program.coder.events.decode(encoded);

        if (decoded?.name === "initializedLottery") {
          toast.success("Lottery Initialized Successfully!", {
            cancel: {
              label: "View Transaction",
              onClick: () =>
                window.open(`https://solscan.io/tx/${tx}`, "_blank"),
            },
          });
          return;
        }
      }
    } catch (err) {
      console.error("Error Initializing Lottery:", err);
      toast.error("Something went wrong while Initializing Lottery");
    } finally {
      setIsInitializingLottery(false);
    }
  };

  const handleCommitWinner = async () => {
    if (!program) return;
    try {
      setIsCommitingWinner(true);

      const tx = await program.methods
        .commitAWinner()
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

      const logs = txDetails?.meta?.logMessages;
      const eventLog = logs?.find((l) => l.startsWith("Program data:"));

      if (eventLog) {
        const encoded = eventLog.replace("Program data: ", "");
        const decoded = program.coder.events.decode(encoded);

        if (decoded?.name === "Commited Winner") {
          toast.success("Winner Commited Successfully!", {
            cancel: {
              label: "View Transaction",
              onClick: () =>
                window.open(`https://solscan.io/tx/${tx}`, "_blank"),
            },
          });
          return;
        }
      }
    } catch (err) {
      console.error("Error Initializing Lottery:", err);
      toast.error("Something went wrong while Initializing Lottery");
    } finally {
      setIsCommitingWinner(false);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                value={new Date(config.startTime).toISOString().slice(0, 16)}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    startTime: Math.floor(
                      new Date(e.target.value).getTime() / 1000
                    ),
                  }))
                }
                className="rounded-xl border border-input focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                name="endTime"
                type="datetime-local"
                value={new Date(config.endTime).toISOString().slice(0, 16)}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    startTime: Math.floor(
                      new Date(e.target.value).getTime() / 1000
                    ),
                  }))
                }
                className="rounded-xl border border-input focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prize">Prize (SOL)</Label>
              <Input
                id="prize"
                name="prize"
                type="number"
                value={config.prize}
                onChange={handleConfigChange}
              />
            </div>
            <Button
              onClick={handleInitializeConfig}
              disabled={isInitializing}
              className="w-full"
            >
              {isInitializing ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Initialize Config"
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

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
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Initialize Lottery"
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>3. Manage Randomness</CardTitle>
            <CardDescription>
              Interact with Switchboard to get a random number.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              // onClick={commitAWinner}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Commit a Winner"
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>4. Choose Winner</CardTitle>
            <CardDescription>
              Finalize the lottery and select a winner based on the randomness.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {lotteryData.isWinnerChosen ? (
              <div className="text-center text-primary">
                <p>Winner has been chosen!</p>
                <p className="font-mono text-xs mt-2 break-all">
                  {/* {lotteryData.winner} */}

                  {"4y9....kp"}
                </p>
              </div>
            ) : (
              <Button
                // onClick={chooseWinner}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Choose Winner"
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
