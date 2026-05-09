import { useMemo } from "react";

import { MenuItem } from "../types/menu.type";

type Props = {
  menu?: MenuItem[];
  search: string;
  selectedCategory: number;
};

export function useMenuFilter({ menu, search, selectedCategory }: Props) {
  return useMemo(() => {
    if (!menu) return [];

    return menu.filter((item) => {
      const matchCategory =
        selectedCategory === 0 || item.category_id === selectedCategory;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [menu, search, selectedCategory]);
}
