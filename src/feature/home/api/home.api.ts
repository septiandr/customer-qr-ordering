import { apiFetch } from "@/src/lib/api/client";
import { ENDPOINTS } from "@/src/lib/api/enpoints";

export function getTableStatus(tableId: string) {
  return apiFetch(ENDPOINTS.TABLE_STATUS(tableId));
}
