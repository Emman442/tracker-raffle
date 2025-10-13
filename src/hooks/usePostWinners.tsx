// hooks/usePostData.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWinners } from "../../services/postWinners";


export function usePostData() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addWinners,
    onSuccess: () => {
      // refresh activity table after adding new one
      queryClient.invalidateQueries({ queryKey: ["rafflewinners"] });
    },
  });

  return { mutate, isPending };
}
