import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../api/menu.api";

export function useMenu(tableId: string) {
  return useQuery({
    queryKey: ["menu", tableId],

    queryFn: () => getMenu(tableId),
  });
}
