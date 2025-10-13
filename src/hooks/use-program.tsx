import { useMemo } from "react";
import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { TokenLottery, tokenLotteryIDL } from "../../anchor/src";

export const useProgram = () => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const { program, provider } = useMemo(() => {
    if (!wallet?.publicKey) return { program: null, provider: null };

    const provider = new AnchorProvider(connection, wallet, {
      commitment: "confirmed",
    });

    const program = new Program<TokenLottery>(tokenLotteryIDL, provider);

    return { program, provider };
  }, [connection, wallet]);

  return { program, provider };
};
