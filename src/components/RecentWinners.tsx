"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useFetchWinners } from "@/hooks/useFetchWinners";
import { TOKEN_MINT_DECIMALS } from "@/constants/constants";

export default function RecentWinners() {
  const { data } = useFetchWinners();
  const recentWinners = data || [];
  console.log("Recent Winners Data:", recentWinners);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Recent Winners</CardTitle>
          </div>
          <CardDescription>
            Check out who has been striking it lucky!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentWinners.length === 0 ? (
            <div className="text-center text-muted-foreground py-8 text-lg">
              No recent winners.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">S/N</TableHead>
                  <TableHead>Winner</TableHead>
                  <TableHead className="text-right">
                    Prize Amount ($TRACKER)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentWinners.map((entry, index) => (
                  <motion.tr
                    key={entry?._id}
                    className="border-b-0"
                    variants={itemVariants}
                  >
                    <TableCell className="font-medium">#{index+1}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      {entry.user}
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      {(entry.amount / (10**TOKEN_MINT_DECIMALS)).toFixed(2)}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
