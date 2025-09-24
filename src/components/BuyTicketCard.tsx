"use client";

import { useLottery } from "@/hooks/useLottery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { Loader2, Ticket } from "lucide-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function BuyTicketCard() {
  const { connected } = useWallet();
  const { lotteryData, loading, buyTicket } = useLottery();

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
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
          <CardTitle className="mt-4 text-3xl">Buy a Lottery Ticket</CardTitle>
          <CardDescription>
            Current ticket price is{" "}
            <span className="font-bold text-primary">
              {lotteryData.ticketPrice / LAMPORTS_PER_SOL} SOL
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!connected ? (
            <p className="text-center text-muted-foreground">
              Please connect your wallet to buy a ticket.
            </p>
          ) : lotteryData.status !== 'Open' ? (
            <p className="text-center text-yellow-500">
              The lottery is currently closed.
            </p>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={buyTicket} disabled={loading} className="w-full text-lg py-6">
                {loading ? (
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
