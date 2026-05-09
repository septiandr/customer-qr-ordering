import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";
import { useTableStore } from "../../home/store/table.store";
import { createOrder, mapCartToOrderPayload } from "../../order/api/order.api";
import { CartItemCard } from "../components/CartItemCard";
import { useCartStore } from "../store/cart.store";
import s from "../styles/cart.styles";

export default function CartScreenUI() {
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();
  const currentTable = useTableStore((state) => state.currentTable);

  const subtotal = useCartStore((state) => state.subtotal);

  const totalItems = useCartStore((state) => state.totalItems);

  const onCheckout = async () => {
    try {
      const payload = mapCartToOrderPayload(cart, currentTable || "");
      const res = await createOrder(payload);
      if (res && typeof res === "object" && "success" in res && res.success) {
        router.push({
          pathname: "/order",
          params: {
            orderId: (res as any)?.data?.order_id || "",
          },
        });
      } else {
        // Handle API error message if present
        alert(
          (res as any)?.message || "Failed to create order. Please try again.",
        );
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please check your connection.");
    }
  };

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

        <TouchableOpacity
          style={s.checkoutButton}
          onPress={onCheckout}
          accessibilityLabel={`Proceed to checkout, total amount $${subtotal.toFixed(2)}`}
          accessibilityRole="button"
          accessibilityHint="Sends your order to the kitchen"
        >
          <Text style={s.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
