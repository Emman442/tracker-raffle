// hooks/usePostData.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWinners } from "../../services/postWinners";


export function usePostData() {
  const queryClient = useQueryClient();
   console.log("usePostWinners called with args:");
  const { mutate, isPending } = useMutation({
    mutationFn: addWinners,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rafflewinners"] });
    },
  });

  return { mutate, isPending };
}
