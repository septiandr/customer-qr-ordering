import { apiFetch } from "@/src/lib/api/client";
import { ENDPOINTS } from "@/src/lib/api/enpoints";

export type CreateOrderPayload = {
  table_id: string;

  items: {
    menu_item_id: number;

    quantity: number;

    customizations: {
      option_id: number;

      quantity: number;
    }[];
  }[];

  customer_note?: string;
};

export function createOrder(payload: CreateOrderPayload) {
  return apiFetch(ENDPOINTS.ORDERS, {
    method: "POST",

    body: JSON.stringify(payload),
  });
}

export function getOrder(id: string) {
  return apiFetch(`${ENDPOINTS.ORDERS}/${id}`);
}
