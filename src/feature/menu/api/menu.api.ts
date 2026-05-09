import categories from "@/src/feature/menu/samples/categories.json";
import menu from "@/src/feature/menu/samples/foods.json";

// export function getMenu(tableId: string) {
//   return apiFetch(ENDPOINTS.MENU, {
//     params: {
//       table_id: tableId,
//     },
//   });
// }

// export function getCategories() {
//   return apiFetch(ENDPOINTS.CATEGORIES);
// }

export async function getMenu(tableId: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("fetching menu for table:", tableId);

  return menu;
}

export async function getCategories() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return categories;
}
