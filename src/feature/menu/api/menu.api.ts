import categories from "@/src/feature/menu/samples/categories.json";
import menu from "@/src/feature/menu/samples/foods.json";
import { apiFetch } from "@/src/lib/api/client";
import { ENDPOINTS } from "@/src/lib/api/enpoints";

export async function getMenu(tableId: string) {
  const useMock = process.env.EXPO_PUBLIC_USE_MOCK === "true";

  if (useMock) {
    return menu;
  }

  const response = await apiFetch(ENDPOINTS.MENU, {
    params: {
      table_id: tableId,
    },
  });

  return response;
}

export async function getCategories() {
  const useMock = process.env.EXPO_PUBLIC_USE_MOCK === "true";

  if (useMock) {
    return categories;
  }

  const response = await apiFetch(ENDPOINTS.CATEGORIES);

  return response;
}
