"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Banknote, Calendar, Clock, Ticket } from "lucide-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useProgram } from "@/hooks/use-program";
import { TOKEN_MINT_DECIMALS } from "@/constants/constants";

const InfoCard = ({
  icon,
  title,
  value,
  unit,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number | React.ReactNode;
  unit?: string;
}) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className="h-full">
    <Card className="h-full bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">
          {value} <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Countdown = ({ endTime }: { endTime: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    return (
      <div key={interval} className="flex flex-col items-center">
        <span className="text-2xl font-bold text-primary">
          {String(value).padStart(2, "0")}
        </span>
        <span className="text-xs text-muted-foreground">
          {interval.toUpperCase()}
        </span>
      </div>
    );
  });

  return (
    <div className="flex justify-around items-center w-full">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default function LotteryStatus() {
  const [currentLottery, setCurrentLottery] = useState<any | null>(null);
  const { program } = useProgram();
  //  if (!program) return <>loading...</>;

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

      if (!account) {
        console.warn("No lottery found on-chain yet.");
        setCurrentLottery(null);
        return;
      }
      console.log("account: ", account);
      setCurrentLottery(account);
    } catch (err) {
      console.error("Error fetching lottery details:", err);
    }
  }, [program, lotteryPDA]);

  useEffect(() => {
    fetchLotteryDetails();
  }, [fetchLotteryDetails]);

  console.log(currentLottery);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <InfoCard
        icon={<Banknote className="h-4 w-4 text-muted-foreground" />}
        title="Prize Pool"
        value={currentLottery?.potAmount.toNumber() / (10**TOKEN_MINT_DECIMALS) || 0}
        unit="TRACKER"
      />
      <InfoCard
        icon={<Ticket className="h-4 w-4 text-muted-foreground" />}
        title="Tickets Sold"
        value={currentLottery?.totalTickets.toNumber() || 0}
      />
      <InfoCard
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        title="Lottery Status"
        value={
          <Badge
            variant={
              currentLottery?.winnerChosen === "Open"
                ? "default"
                : "destructive"
            }
            className="text-lg bg-primary/20 text-primary border-primary/50"
          >
            {!currentLottery ||
            currentLottery?.winnerChosen ||
            !currentLottery?.endTime.toNumber() ||
            !currentLottery.startTime.toNumber()
              ? "Closed"
              : "Open"}
          </Badge>
        }
      />
      <Card className="h-full bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {!currentLottery
              ? "No Active Lottery"
              : currentLottery.winnerChosen ||
                Date.now() / 1000 > currentLottery.endTime.toNumber()
              ? "Lottery Ended"
              : "Time Remaining"}
          </CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          {!currentLottery ? (
            <div className="text-2xl font-bold text-muted-foreground">
              No active lottery
            </div>
          ) : currentLottery.winnerChosen ||
            Date.now() / 1000 > currentLottery.endTime.toNumber() ? (
            <div className="text-2xl font-bold text-primary">Ended</div>
          ) : (
            <Countdown
              endTime={new Date(
                currentLottery.endTime.toNumber() * 1000
              ).toISOString()}
            />
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
