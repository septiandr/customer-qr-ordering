import { create } from "zustand";

type TableStore = {
  currentTable: string | null;

  setTable: (tableId: string) => void;

  clearTable: () => void;
};

export const useTableStore = create<TableStore>((set) => ({
  currentTable: null,

  setTable: (tableId) =>
    set({
      currentTable: tableId,
    }),

  clearTable: () =>
    set({
      currentTable: null,
    }),
}));
