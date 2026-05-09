import { AddCartItem, SelectedOption } from "../types/cart.type";
import { useCartStore } from "./cart.store";

describe("Cart Store", () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  const mockItem: AddCartItem = {
    id: 1,
    name: "Nasi Goreng",
    price: 25000,
    image_url: "nasi-goreng.jpg",
  };

  const mockOptions: SelectedOption[] = [
    {
      option_id: 101,
      option_name: "Pedas",
      value: "Level 3",
      price_modifier: 2000,
    },
  ];

  it("should start with an empty cart", () => {
    const state = useCartStore.getState();
    expect(state.cart).toEqual([]);
    expect(state.subtotal).toBe(0);
    expect(state.totalItems).toBe(0);
  });

  it("should add a new item to the cart", () => {
    useCartStore.getState().addToCart(mockItem);
    const state = useCartStore.getState();

    expect(state.cart.length).toBe(1);
    expect(state.cart[0].id).toBe(mockItem.id);
    expect(state.cart[0].quantity).toBe(1);
    expect(state.cart[0].final_price).toBe(25000);
    expect(state.totalItems).toBe(1);
    expect(state.subtotal).toBe(25000);
  });

  it("should add item with options", () => {
    useCartStore.getState().addToCart(mockItem, mockOptions);
    const state = useCartStore.getState();

    expect(state.cart[0].final_price).toBe(27000); // 25000 + 2000
    expect(state.subtotal).toBe(27000);
  });

  it("should increase quantity if same item with same options is added", () => {
    useCartStore.getState().addToCart(mockItem, mockOptions);
    useCartStore.getState().addToCart(mockItem, mockOptions);
    const state = useCartStore.getState();

    expect(state.cart.length).toBe(1);
    expect(state.cart[0].quantity).toBe(2);
    expect(state.totalItems).toBe(2);
    expect(state.subtotal).toBe(54000);
  });

  it("should add as separate items if options are different", () => {
    useCartStore.getState().addToCart(mockItem);
    useCartStore.getState().addToCart(mockItem, mockOptions);
    const state = useCartStore.getState();

    expect(state.cart.length).toBe(2);
    expect(state.totalItems).toBe(2);
  });

  it("should increase quantity by cart_id", () => {
    useCartStore.getState().addToCart(mockItem);
    const cartId = useCartStore.getState().cart[0].cart_id;

    useCartStore.getState().increaseQty(cartId);
    const state = useCartStore.getState();

    expect(state.cart[0].quantity).toBe(2);
    expect(state.totalItems).toBe(2);
    expect(state.subtotal).toBe(50000);
  });

  it("should decrease quantity by cart_id", () => {
    useCartStore.getState().addToCart(mockItem);
    const cartId = useCartStore.getState().cart[0].cart_id;
    useCartStore.getState().increaseQty(cartId); // qty: 2

    useCartStore.getState().decreaseQty(cartId);
    const state = useCartStore.getState();

    expect(state.cart[0].quantity).toBe(1);
    expect(state.totalItems).toBe(1);
  });

  it("should remove item when decreasing quantity to 0", () => {
    useCartStore.getState().addToCart(mockItem);
    const cartId = useCartStore.getState().cart[0].cart_id;

    useCartStore.getState().decreaseQty(cartId);
    const state = useCartStore.getState();

    expect(state.cart.length).toBe(0);
    expect(state.totalItems).toBe(0);
    expect(state.subtotal).toBe(0);
  });

  it("should remove item completely", () => {
    useCartStore.getState().addToCart(mockItem);
    const cartId = useCartStore.getState().cart[0].cart_id;

    useCartStore.getState().removeItem(cartId);
    const state = useCartStore.getState();

    expect(state.cart.length).toBe(0);
  });

  it("should clear the cart", () => {
    useCartStore.getState().addToCart(mockItem);
    useCartStore.getState().clearCart();
    const state = useCartStore.getState();

    expect(state.cart).toEqual([]);
    expect(state.totalItems).toBe(0);
    expect(state.subtotal).toBe(0);
  });

  it("should increase quantity by item id", () => {
    useCartStore.getState().addToCart(mockItem);
    useCartStore.getState().increaseQtyById(String(mockItem.id));
    const state = useCartStore.getState();

    expect(state.cart[0].quantity).toBe(2);
  });

  it("should decrease quantity by menu id (last added)", () => {
    useCartStore.getState().addToCart(mockItem); // item 1, qty 1
    useCartStore.getState().addToCart(mockItem, mockOptions); // item 1 with options, qty 1

    useCartStore.getState().decreaseQtyMenu(String(mockItem.id));
    const state = useCartStore.getState();

    // Should remove the last added item with that ID
    expect(state.cart.length).toBe(1);
    expect(state.cart[0].selected_options).toEqual([]); // The first one remains
  });
});
