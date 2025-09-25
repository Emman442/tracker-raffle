"use client";

import { useState, useEffect, useMemo } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as anchor from '@coral-xyz/anchor';
import { IDL, TokenLottery } from '@/idl/token_lottery';
import { PROGRAM_ID, AUTHORITY_PUBLIC_KEY, MOCK_WINNER_PUBLIC_KEY } from '@/lib/constants';
import { useToast } from './use-toast';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

// Mock data for UI development without a live program
const MOCK_LOTTERY_DATA = {
  status: 'Open',
  startTime: new Date(Date.now() - 3600 * 1000).toISOString(),
  endTime: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
  prize: 100 * LAMPORTS_PER_SOL, // 100 SOL
  ticketsSold: 420,
  ticketPrice: 0.1 * LAMPORTS_PER_SOL, // 0.1 SOL
  isWinnerChosen: false,
  winner: MOCK_WINNER_PUBLIC_KEY.toBase58(),
  randomnessPending: false,
};

const MOCK_RECENT_WINNERS = [
    { lotteryId: 123, winner: "5q2g...f3x", prize: 50 * LAMPORTS_PER_SOL },
    { lotteryId: 122, winner: "E2rT...u7y", prize: 75 * LAMPORTS_PER_SOL },
    { lotteryId: 121, winner: "9iNf...sKq", prize: 120 * LAMPORTS_PER_SOL },
    { lotteryId: 120, winner: "H4vB...pLz", prize: 95 * LAMPORTS_PER_SOL },
];

export function useLottery() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const { toast } = useToast();
  const [program, setProgram] = useState<anchor.Program<TokenLottery> | null>(null);
  const [lotteryData, setLotteryData] = useState(MOCK_LOTTERY_DATA);
  const [recentWinners, setRecentWinners] = useState(MOCK_RECENT_WINNERS);
  const [loading, setLoading] = useState(false);

  const isAuthority = useMemo(() => {
    return publicKey ? publicKey.equals(AUTHORITY_PUBLIC_KEY) : false;
  }, [publicKey]);

  const isWinner = useMemo(() => {
    return publicKey ? publicKey.toBase58() === lotteryData.winner : false;
  }, [publicKey, lotteryData.winner]);

  useEffect(() => {
    if (publicKey) {
      const provider = new anchor.AnchorProvider(connection, { ...useWallet() } as anchor.Wallet, {});
      const programInstance = new anchor.Program(IDL, PROGRAM_ID, provider);
      setProgram(programInstance);
    } else {
      setProgram(null);
    }
  }, [publicKey, connection]);

  // Generic function to simulate a transaction
  const simulateTransaction = async (actionName: string, duration = 2000) => {
    if (!publicKey || !program) {
      toast({ variant: "destructive", title: "Wallet not connected" });
      return;
    }

    setLoading(true);
    const toastId = toast({ title: "Sending Transaction...", description: `Executing ${actionName}` }).id;

    try {
      // In a real app, you would build and send the transaction here.
      // const tx = await program.methods...
      // const signature = await sendTransaction(tx, connection);
      // await connection.confirmTransaction(signature, 'confirmed');

      await new Promise(resolve => setTimeout(resolve, duration));
      const fakeSignature = `mock_sig_${Math.random().toString(36).substr(2, 9)}`;

      toast.update(toastId, {
        title: "Transaction Confirmed!",
        description: `Signature: ${fakeSignature.slice(0, 10)}...`,
      });

      // Update mock state if needed
      if (actionName === 'buy_ticket') {
        setLotteryData(prev => ({ ...prev, ticketsSold: prev.ticketsSold + 1 }));
      }
      if (actionName === 'choose_winner') {
        setLotteryData(prev => ({ ...prev, isWinnerChosen: true, status: 'Closed' }));
      }
      
      return fakeSignature;
    } catch (error: any) {
      toast.update(toastId, {
        variant: "destructive",
        title: "Transaction Failed",
        description: error.message,
      });
      console.error(`${actionName} failed`, error);
    } finally {
      setLoading(false);
    }
  };

  const initializeConfig = async (startTime: number, endTime: number, prize: number) => {
    return simulateTransaction('initialize_config');
  };

  const initializeLottery = async () => {
    return simulateTransaction('initialize_lottery');
  };

  const buyTicket = async () => {
    return simulateTransaction('buy_ticket');
  };

  const commitRandomness = async () => {
    setLotteryData(prev => ({ ...prev, randomnessPending: true }));
    await simulateTransaction('commit_randomness', 3000);
    setLotteryData(prev => ({ ...prev, randomnessPending: false }));
  };
  
  const commitAWinner = async () => {
    return simulateTransaction('commit_a_winner');
  };

  const chooseWinner = async () => {
    return simulateTransaction('choose_winner');
  };

  const claimWinnings = async () => {
    return simulateTransaction('claim_winnings');
  };

  return {
    program,
    lotteryData,
    recentWinners,
    loading,
    isAuthority,
    isWinner,
    initializeConfig,
    initializeLottery,
    buyTicket,
    commitRandomness,
    commitAWinner,
    chooseWinner,
    claimWinnings,
  };
}
