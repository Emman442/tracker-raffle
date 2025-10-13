"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { Award, Loader2 } from "lucide-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { useProgram } from "@/hooks/use-program";
import * as anchor from "@coral-xyz/anchor";
import { toast } from "sonner";
import { TOKEN_METADATA_PROGRAM_ID, TOKEN_MINT, TOKEN_MINT_DECIMALS } from "@/constants/constants";
import {
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

export default function ClaimPrizeCard() {
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();
  const { program } = useProgram();

  const [isClaimingPrize, setIsClaimingPrize] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [lotteryData, setLotteryData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Compute the TokenLottery PDA once
  const [tokenLotteryPda] = PublicKey.findProgramAddressSync(
    [Buffer.from("token_lottery")],
    program?.programId ?? PublicKey.default
  );

  /** 🔍 Fetch lottery data and check if user is winner */
  useEffect(() => {
    const fetchLotteryData = async () => {
      if (!program || !publicKey) return;

      try {
        setLoading(true);

        // Fetch the TokenLottery account
        const tokenLottery = await program.account.tokenLottery.fetch(
          tokenLotteryPda
        );
        setLotteryData(tokenLottery);

        // No winner chosen yet
        if (!tokenLottery.winnerChosen) {
          setIsWinner(false);
          return;
        }

        // Derive the winning ticket mint PDA
        const [ticketMint] = anchor.web3.PublicKey.findProgramAddressSync(
          [
            Buffer.from(
              new anchor.BN(tokenLottery.winner).toArrayLike(Buffer, "le", 8)
            ),
          ],
          program.programId
        );

        // Compute user's associated token account (ATA)
        const ata = getAssociatedTokenAddressSync(ticketMint, publicKey);

        // Check if this ATA has a token balance
        const accountInfo = await connection
          .getTokenAccountBalance(ata)
          .catch(() => null);

        if (accountInfo && Number(accountInfo.value.amount) > 0) {
          setIsWinner(true);
        } else {
          setIsWinner(false);
        }
      } catch (err) {
        console.error("Error fetching lottery or token account:", err);
        setIsWinner(false);
      } finally {
        setLoading(false);
      }
    };

    fetchLotteryData();
  }, [program, publicKey, connection]);

  /** 💰 Handle claim winnings */
  const handleClaimWinnings = async () => {
    if (!program || !publicKey) {
      toast.error("Please connect your wallet");
      return;
    }

    setIsClaimingPrize(true);
    try {
      const tokenLottery = await program.account.tokenLottery.fetch(
        tokenLotteryPda
      );

      const [ticketMint] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(
            new anchor.BN(tokenLottery.winner).toArrayLike(Buffer, "le", 8)
          ),
        ],
        program.programId
      );

      const [ticketMetadata] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          ticketMint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      );

      const destination = getAssociatedTokenAddressSync(ticketMint, publicKey);
      const vaultTokenAccount = getAssociatedTokenAddressSync(
        TOKEN_MINT,
        tokenLotteryPda,
        true
      );

      const tx = await program.methods
        .claimWinnings()
        .accounts({
          payer: publicKey,
          winnerTokenAccount: destination,
          metadata: ticketMetadata,
          destination,
          ticketMint,
          tokenLottery: tokenLotteryPda,
          rewardMint: TOKEN_MINT,
          rewardVault: vaultTokenAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      toast.success("Winnings Claimed Successfully!", {
        cancel: {
          label: "View Transaction",
          onClick: () => window.open(`https://solscan.io/tx/${tx}`, "_blank"),
        },
      });
    } catch (err) {
      console.error("Error claiming winnings:", err);
      toast.error("Something went wrong while claiming winnings.");
    } finally {
      setIsClaimingPrize(false);
    }
  };

  /** 🎨 Animation variants */
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  /** 🧠 Conditional render */
  const renderContent = () => {
    if (!connected) {
      return (
        <p className="text-center text-muted-foreground">
          Please connect your wallet.
        </p>
      );
    }

    if (loading) {
      return (
        <p className="text-center text-muted-foreground">
          Loading lottery info...
        </p>
      );
    }

    if (!lotteryData) {
      return (
        <p className="text-center text-muted-foreground">
          Lottery has not been initialized or started yet.
        </p>
      );
    }

    if (!lotteryData.winnerChosen) {
      return (
        <p className="text-center text-muted-foreground">
          A winner has not been chosen yet.
        </p>
      );
    }

    if (isWinner) {
      return (
        <div className="text-center space-y-4">
          <p className="text-lg text-green-400">
            🎉 Congratulations! You are the winner!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleClaimWinnings}
              disabled={isClaimingPrize}
              className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              {isClaimingPrize ? (
                <Loader2 className="animate-spin" />
              ) : (
                `Claim ${(
                  Number(lotteryData.potAmount) / TOKEN_MINT_DECIMALS
                ).toFixed(2)} TRACKER`
              )}
            </Button>
          </motion.div>
        </div>
      );
    }

    return (
      <p className="text-center text-muted-foreground">
        You are not the winner of this lottery. Better luck next time!
      </p>
    );
  };

  /** 🧱 Render card */
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
            <Award className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="mt-4 text-3xl">Prize Claim</CardTitle>
          <CardDescription>
            The total prize pool is{" "}
            <span className="font-bold text-primary">
              {lotteryData
                ? (Number(lotteryData.potAmount) / LAMPORTS_PER_SOL).toFixed(2)
                : "--"}{" "}
              SOL
            </span>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </motion.div>
  );
}
