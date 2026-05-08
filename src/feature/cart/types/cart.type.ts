/* =========================
   VARIANT / CUSTOMIZATION
========================= */

export type SelectedOption = {
  group_id: number;
  group_name: string;

  option_id: number;
  option_name: string;

  price_modifier: number;
};

/* =========================
   MENU ITEM (FROM API)
========================= */

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  image_url?: string | null;
  customization_groups: {
    id: number;
    name: string;
    required: boolean;
    max_selections: number;

    options: {
      id: number;
      name: string;
      price_modifier: number;
    }[];
  }[];
};

/* =========================
   ADD TO CART PAYLOAD
========================= */

export type AddCartItem = {
  id: number;

  name: string;

  price: number;

  image_url?: string | null;
};

/* =========================
   CART ITEM (FINAL STRUCTURE)
========================= */

export type CartItem = {
  cart_id: string; // UNIQUE PER VARIANT

  id: number;

  name: string;

  base_price: number;

  final_price: number; // base_price + modifiers

  quantity: number;

  image_url?: string | null;

  selected_options: SelectedOption[];
};

/* =========================
   OPTIONAL: CART SUMMARY TYPE
========================= */

export type CartSummary = {
  total_items: number;

  subtotal: number;

  tax?: number;

  discount?: number;

  total: number;
};
