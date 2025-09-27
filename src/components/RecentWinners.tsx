"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function RecentWinners() {
    // const { recentWinners } = useLottery();
    const recentWinners = [{
        lotteryId: "123",
        prize: 20,
        winner: "49y...kp"
    }]

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
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
                    <CardDescription>Check out who has been striking it lucky!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Lottery ID</TableHead>
                                <TableHead>Winner</TableHead>
                                <TableHead className="text-right">Prize Amount (SOL)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentWinners.map((entry, index) => (
                                <motion.tr 
                                    key={entry.lotteryId}
                                    className="border-b-0"
                                    variants={itemVariants}
                                >
                                    <TableCell className="font-medium">#{entry.lotteryId}</TableCell>
                                    <TableCell className="font-mono text-muted-foreground">{entry.winner}</TableCell>
                                    <TableCell className="text-right font-bold text-primary">
                                        {(entry.prize / LAMPORTS_PER_SOL).toFixed(2)}
                                    </TableCell>
                                </motion.tr>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </motion.div>
    )
}
