import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { useCartStore } from "../store/cart.store";

import s from "../styles/cart.item-styles";
import { CartItem } from "../types/cart.type";

type Props = {
  item: CartItem;
};

export function CartItemCard({ item }: Props) {
  const increaseQty = useCartStore((state) => state.increaseQty);

  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const removeItem = useCartStore((state) => state.removeItem);

  /* =========================
     TOTAL
  ========================= */

  const itemTotal = item.final_price * item.quantity;

  return (
    <View style={s.card}>
      {/* HEADER */}
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={s.name}>{item.name}</Text>

          {/* PRICE PER ITEM */}
          <Text style={s.price}>${item.final_price.toFixed(2)} / item</Text>
        </View>

        {/* TOTAL */}
        <Text style={s.totalPrice}>${itemTotal.toFixed(2)}</Text>
      </View>

      {/* OPTIONS */}
      {item.selected_options?.length > 0 && (
        <View style={s.options}>
          {item.selected_options.map((opt) => (
            <Text key={opt.option_id} style={s.optionText}>
              • {opt.group_name}: {opt.option_name}
            </Text>
          ))}
        </View>
      )}

      {/* ACTIONS */}
      <View style={s.bottom}>
        <TouchableOpacity onPress={() => removeItem(item.cart_id)}>
          <Ionicons name="trash-outline" size={20} color="#ff4d4d" />
        </TouchableOpacity>

        <View style={s.qtyWrapper}>
          <TouchableOpacity
            style={s.minusButton}
            onPress={() => decreaseQty(item.cart_id)}
          >
            <Ionicons name="remove" size={18} color="#111" />
          </TouchableOpacity>

          <Text style={s.qtyText}>{item.quantity}</Text>

          <TouchableOpacity
            style={s.plusButton}
            onPress={() => increaseQty(item.cart_id)}
          >
            <Ionicons name="add" size={18} color="#111" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
