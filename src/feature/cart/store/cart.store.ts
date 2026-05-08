import { create } from "zustand";
import { AddCartItem, CartItem, SelectedOption } from "../types/cart.type";

type CartStore = {
  cart: CartItem[];
  subtotal: number;
  totalItems: number;
  addToCart: (item: AddCartItem, selectedOptions?: SelectedOption[]) => void;
  increaseQty: (cart_id: string) => void;
  decreaseQty: (cart_id: string) => void;
  removeItem: (cart_id: string) => void;
  clearCart: () => void;
  decreaseQtyMenu: (id: string) => void;
};
export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  subtotal: 0,
  totalItems: 0,

  addToCart: (item, selectedOptions = []) =>
    set((state) => {
      const cart_id = generateCartId(item.id, selectedOptions);

      const existing = state.cart.find((x) => x.cart_id === cart_id);

      const extraPrice = selectedOptions.reduce(
        (acc, opt) => acc + opt.price_modifier,
        0,
      );

      const final_price = item.price + extraPrice;

      let updatedCart: CartItem[];

      if (existing) {
        updatedCart = state.cart.map((x) =>
          x.cart_id === cart_id
            ? {
                ...x,
                quantity: x.quantity + 1,
              }
            : x,
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            cart_id,
            id: item.id,
            name: item.name,
            base_price: item.price,
            final_price,
            quantity: 1,
            image_url: item.image_url,
            selected_options: selectedOptions,
          },
        ];
      }

      return recalc(updatedCart);
    }),

  increaseQty: (cart_id) =>
    set((state) => {
      const updatedCart = state.cart.map((x) =>
        x.cart_id === cart_id
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x,
      );

      return recalc(updatedCart);
    }),
  decreaseQty: (cart_id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((x) =>
          x.cart_id === cart_id
            ? {
                ...x,
                quantity: x.quantity - 1,
              }
            : x,
        )
        .filter((x) => x.quantity > 0);

      return recalc(updatedCart);
    }),

  decreaseQtyMenu: (id) =>
    set((state) => {
      const index = [...state.cart]
        .map((x, i) => ({
          ...x,
          index: i,
        }))
        .reverse()
        .find((x) => String(x.id) === id)?.index;

      if (index === undefined) return state;

      const updatedCart = [...state.cart];

      const item = updatedCart[index];

      if (item.quantity > 1) {
        updatedCart[index] = {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        updatedCart.splice(index, 1);
      }

      return recalc(updatedCart);
    }),

  /* =========================
       REMOVE ITEM
    ========================= */

  removeItem: (cart_id) =>
    set((state) => {
      const updatedCart = state.cart.filter((x) => x.cart_id !== cart_id);

      return recalc(updatedCart);
    }),

  clearCart: () =>
    set({
      cart: [],
      subtotal: 0,
      totalItems: 0,
    }),
}));

/**
 * Create unique cart ID based on:
 * product + selected options
 */
function generateCartId(id: number, options: SelectedOption[]) {
  const optionKey = options
    .map((o) => o.option_id)
    .sort()
    .join("-");

  return `${id}-${optionKey}`;
}

/**
 * Recalculate cart totals
 */
function recalc(cart: CartItem[]) {
  return {
    cart,
    subtotal: calculateSubtotal(cart),
    totalItems: calculateTotalItems(cart),
  };
}

/**
 * subtotal = final_price * qty
 */
function calculateSubtotal(cart: CartItem[]) {
  return cart.reduce((acc, item) => acc + item.final_price * item.quantity, 0);
}

/**
 * total item count
 */
function calculateTotalItems(cart: CartItem[]) {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}
