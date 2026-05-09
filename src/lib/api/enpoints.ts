export const ENDPOINTS = {
  MENU: "/api/v1/menu",

  CATEGORIES: "/api/v1/categories",

  ORDERS: "/api/v1/orders",

  TABLE_STATUS: (id: string) => `/api/v1/tables/${id}/status`,
};
