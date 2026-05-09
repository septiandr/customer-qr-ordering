import { apiFetch } from "@/src/lib/api/client";
import { ENDPOINTS } from "@/src/lib/api/enpoints";
import { CartItem } from "../../cart/types/cart.type";

export function mapCartToOrderPayload(
  cartItems: CartItem[],
  tableId: string,
  customerNote?: string,
): CreateOrderPayload {
  return {
    table_id: tableId,
    customer_note: customerNote,
    items: cartItems.map((item) => ({
      menu_item_id: item.id,
      quantity: item.quantity,
      customizations:
        item.selected_options?.map((option) => ({
          option_id: option.option_id,
          quantity: 1,
        })) || [],
    })),
  };
}

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

export async function createOrder(payload: CreateOrderPayload) {
  const useMock = process.env.EXPO_PUBLIC_USE_MOCK === "true";

  if (useMock) {
    // simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Order created successfully",
      data: {
        order_id: "ORD-20260509-001",
        table_id: payload.table_id,
        status: "pending",
        customer_note: payload.customer_note || "",
        total_items: payload.items.length,
        created_at: new Date().toISOString(),
        items: payload.items,
      },
    };
  }

  const res = await apiFetch(ENDPOINTS.ORDERS, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });

  return res;
}

export async function getOrder(id: string) {
  const useMock = process.env.EXPO_PUBLIC_USE_MOCK === "true";

  if (useMock) {
    // simulasi delay API
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: {
        order_id: id,
        table_id: "T001",
        status: "pending",
        customer_note: "No MSG please",
        created_at: new Date().toISOString(),
        items: [
          {
            menu_item_id: 2,
            menu_name: "Salmon Sashimi",
            quantity: 1,
            price: 24.99,
            subtotal: 24.99,
            customizations: [
              {
                option_id: 5,
                option_name: "Large (12pc)",
                quantity: 1,
                price_modifier: 8,
              },
            ],
          },
        ],
        summary: {
          total_items: 1,
          subtotal: 24.99,
          tax: 2.5,
          grand_total: 27.49,
        },
      },
    };
  }

  return apiFetch(`${ENDPOINTS.ORDERS}/${id}`);
}
