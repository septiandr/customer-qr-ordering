export const ORDER_STATUS = [
  "pending",
  "confirmed",
  "preparing",
  "ready",
  "served",
] as const;

export type OrderStatus = (typeof ORDER_STATUS)[number];
