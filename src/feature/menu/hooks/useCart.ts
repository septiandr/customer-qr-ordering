import { useMemo, useState } from "react";
import { CartItem, MenuItem, MenuOption } from "../types/menu.type";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: MenuItem, selectedOptions: MenuOption[]) {
    setCart((prev) => [
      ...prev,
      {
        item,
        quantity: 1,
        selectedOptions,
      },
    ]);
  }

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.item.price * item.quantity;
    }, 0);
  }, [cart]);

  return {
    cart,
    subtotal,
    addToCart,
  };
}
