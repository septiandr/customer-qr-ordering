export type MenuOption = {
  id: number;
  name: string;
  price_modifier: number;
};

export type CustomizationGroup = {
  id: number;
  name: string;
  required: boolean;
  max_selections: number;
  options: MenuOption[];
};

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  image_url: string | null;
  customization_groups: CustomizationGroup[];
};

export type CartItem = {
  item: MenuItem;
  quantity: number;
  selectedOptions: MenuOption[];
};
