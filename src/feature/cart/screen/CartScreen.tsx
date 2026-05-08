import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View } from "react-native";

import { CartItemCard } from "../components/CartItemCard";
import { useCartStore } from "../store/cart.store";
import s from "../styles/cart.styles";

export default function CartScreenUI() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = useCartStore((state) => state.subtotal);

  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <View style={s.container}>
      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.title}>Your Cart</Text>

        <Text style={s.subtitle}>{totalItems} items in cart</Text>
      </View>

      {/* LIST */}
      <FlashList
        data={cart}
        keyExtractor={(item) => item.cart_id}
        contentContainerStyle={s.listContent}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        renderItem={({ item }) => <CartItemCard item={item} />}
      />

      {/* FOOTER */}
      <View style={s.footer}>
        <View style={s.totalRow}>
          <Text style={s.totalLabel}>Subtotal</Text>

          <Text style={s.totalValue}>${subtotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={s.checkoutButton}>
          <Text style={s.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
