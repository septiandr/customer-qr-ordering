import { useMutation } from "@tanstack/react-query";
import { createOrder, CreateOrderPayload } from "../api/order.api";

export function useCreateOrder() {
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => createOrder(payload),
  });
}
