import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { fetchWinners, RaffleWinners } from "../../services/fetchWinners";

export function useFetchWinners() {


  const { data, isLoading, error } = useQuery<RaffleWinners[]>({
    queryKey: ["raffleWinners"],
    queryFn: () => fetchWinners(),
    staleTime: 1000 * 60,// will only run when both exist
  });

  return { data, isLoading, error };
}
