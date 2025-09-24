"use client";

import { useLottery } from "@/hooks/useLottery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
  const { connected } = useWallet();
  const { isAuthority, loading, initializeConfig, initializeLottery, commitRandomness, commitAWinner, chooseWinner, lotteryData } = useLottery();
  const [config, setConfig] = useState({ startTime: Date.now(), endTime: Date.now() + 86400000, prize: 10 });

  if (!connected) {
    return <Card className="max-w-md mx-auto"><CardHeader><CardTitle>Access Denied</CardTitle><CardDescription>Please connect your wallet to access the admin panel.</CardDescription></CardHeader></Card>;
  }
  
  if (!isAuthority) {
    return <Card className="max-w-md mx-auto"><CardHeader><CardTitle>Access Denied</CardTitle><CardDescription>Your wallet does not have authority permissions.</CardDescription></CardHeader></Card>;
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <CardTitle>1. Initialize Config</CardTitle>
            <CardDescription>Set the parameters for a new lottery.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time (Timestamp)</Label>
              <Input id="startTime" name="startTime" type="number" value={config.startTime} onChange={handleConfigChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time (Timestamp)</Label>
              <Input id="endTime" name="endTime" type="number" value={config.endTime} onChange={handleConfigChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prize">Prize (SOL)</Label>
              <Input id="prize" name="prize" type="number" value={config.prize} onChange={handleConfigChange} />
            </div>
            <Button onClick={() => initializeConfig(config.startTime, config.endTime, config.prize)} disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin" /> : "Initialize Config"}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle>2. Initialize Lottery</CardTitle>
            <CardDescription>Creates a new lottery instance based on the current config.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={initializeLottery} disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin" /> : "Initialize Lottery"}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle>3. Manage Randomness</CardTitle>
            <CardDescription>Interact with Switchboard to get a random number.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={commitRandomness} disabled={loading || lotteryData.randomnessPending} className="w-full">
              {loading && !lotteryData.randomnessPending ? <Loader2 className="animate-spin" /> : lotteryData.randomnessPending ? 'Randomness Pending...' : 'Commit Randomness'}
            </Button>
            <Button onClick={commitAWinner} disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin" /> : "Commit a Winner"}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>4. Choose Winner</CardTitle>
            <CardDescription>Finalize the lottery and select a winner based on the randomness.</CardDescription>
          </CardHeader>
          <CardContent>
            {lotteryData.isWinnerChosen ? (
                <div className="text-center text-primary">
                    <p>Winner has been chosen!</p>
                    <p className="font-mono text-xs mt-2 break-all">{lotteryData.winner}</p>
                </div>
            ) : (
                <Button onClick={chooseWinner} disabled={loading} className="w-full">
                {loading ? <Loader2 className="animate-spin" /> : "Choose Winner"}
                </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
