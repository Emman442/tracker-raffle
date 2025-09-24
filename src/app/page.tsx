import LotteryStatus from "@/components/LotteryStatus";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Welcome to SolLottery
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          The decentralized, on-chain lottery experience on Solana. Check the status, buy your tickets, and good luck!
        </p>
      </div>
      
      <LotteryStatus />
      
    </div>
  );
}
