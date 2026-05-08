import { useTableStore } from "../store/table.store";

export function useCurrentTable() {
  return useTableStore((state) => state.currentTable);
}
