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
import { Loader2, Ticket } from "lucide-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useProgram } from "@/hooks/use-program";
import { toast } from "sonner";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { publicKey } from "@coral-xyz/anchor/dist/cjs/utils";
import { TOKEN_MINT } from "@/constants/constants";

export default function BuyTicketCard() {
  const { connected } = useWallet();
  const [currentLottery, setCurrentLottery] = useState<any | null>(null);
  const [isBuyingTicket, setIsBuyingTicket] = useState(false);
  const { connection } = useConnection();

  const { program, provider } = useProgram();

  const lotteryPDA = useMemo(() => {
    if (!program) return null;
    try {
      const [pda] = PublicKey.findProgramAddressSync(
        [Buffer.from("token_lottery")],
        program.programId
      );
      return pda;
    } catch (error) {
      console.error("Error calculating rewardVaultPda:", error);
      return null;
    }
  }, [program]);

  const fetchLotteryDetails = useCallback(async () => {
    if (!program) return;
    try {
      const account = await program.account.tokenLottery.fetch(lotteryPDA!);
      console.log("account: ", account);
      setCurrentLottery(account);
    } catch (err) {
      console.error("Error fetching lottery details:", err);
    }
  }, [program, lotteryPDA]);

  useEffect(() => {
    fetchLotteryDetails();
  }, [fetchLotteryDetails]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };
  console.log(currentLottery);

  const handleBuyTicket = async () => {
    if (!program) return;
    try {
      setIsBuyingTicket(true);

      const tx = await program.methods
        .buyTicket()
        .accounts({
          //@ts-ignore
          payer: publicKey,
          tokenLottery: lotteryPDA!,
          // payerTokenAccount: PublicKey,
          // raffleVaultAccount: PublicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
          tokenMint: TOKEN_MINT,
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY,
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

        if (decoded?.name === "boughtTicket") {
          toast.success("Ticket Purchased Successfully!", {
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
      console.error("Error Purchasing Ticket:", err);
      toast.error("Something went wrong while purchasing ticket.");
    } finally {
      setIsBuyingTicket(false);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
            <Ticket className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-[#00FF9C] mt-4 text-3xl">
            Buy a Lottery Ticket
          </CardTitle>
          <CardDescription>
            Current ticket price is{" "}
            <span className="font-bold text-primary">
              {currentLottery?.ticketPrice.toNumber() / LAMPORTS_PER_SOL || 0}{" "}
              SOL
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!connected ? (
            <p className="text-center text-muted-foreground">
              Please connect your wallet to buy a ticket.
            </p>
          ) : currentLottery?.winnerChosen || currentLottery == null ? (
            <p className="text-center text-yellow-500">
              The lottery is currently closed.
            </p>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleBuyTicket}
                disabled={isBuyingTicket}
                className="w-full text-lg py-6"
              >
                {isBuyingTicket ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Buy Ticket Now"
                )}
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
