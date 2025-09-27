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
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { useProgram } from "@/hooks/use-program";
import * as anchor from "@coral-xyz/anchor";
import { toast } from "sonner";

export default function ClaimPrizeCard() {
  const { connected } = useWallet();
  const {connection} = useConnection();
  const [isClaimingPrize, setIsClaimingPrize] = useState(false);
  const { program, provider } = useProgram();

  const lotteryData = {
    isWinnerChosen: true,
    prize: 6000000000,
  };
  const isWinner = true;
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClaimWinnings = async () => {
    if (!program) return;
    try {
      setIsClaimingPrize(true);

      const tx = await program.methods
        .claimWinnings()
        .accounts({
          //@ts-ignore
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

        if (decoded?.name === "winningsClaimed") {
          toast.success("Winnings Claimed Successfully!", {
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
      console.error("Error Initializing Config:", err);
      toast.error("Something went wrong while Initializing the configuration");
    } finally {
      setIsClaimingPrize(false);
    }
  };

  const renderContent = () => {
    if (!connected) {
      return (
        <p className="text-center text-muted-foreground">
          Please connect your wallet.
        </p>
      );
    }
    if (!lotteryData.isWinnerChosen) {
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
            Congratulations! You are the winner!
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
                `Claim ${lotteryData.prize / LAMPORTS_PER_SOL} SOL`
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
              {lotteryData.prize / LAMPORTS_PER_SOL} SOL
            </span>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </motion.div>
  );
}
