import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { Text, TouchableOpacity, View } from "react-native";

import { useCartStore } from "@/src/feature/cart/store/cart.store";

import { useTableStore } from "../store/table.store";
import s from "../styles/home.style";

export default function TableHomeScreen() {
  const router = useRouter();

  const currentTable = useTableStore((state) => state.currentTable);

  const clearTable = useTableStore((state) => state.clearTable);

  const clearCart = useCartStore((state) => state.clearCart);

  function handleRescan() {
    clearCart();

    clearTable();

    router.replace("/scan");
  }

  return (
    <View style={s.container}>
      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.welcome}>Welcome 👋</Text>

        <Text style={s.title}>Table {currentTable}</Text>

        <Text style={s.description}>
          Browse menu, track your order, and enjoy your dining experience.
        </Text>
      </View>

      {/* MENU */}
      <TouchableOpacity
        style={s.primaryCard}
        activeOpacity={0.9}
        accessibilityLabel="Browse Menu"
        accessibilityRole="button"
        onPress={() =>
          router.push({
            pathname: "/menu",
            params: {
              table: currentTable || "T001",
            },
          })
        }
      >
        <Ionicons name="restaurant" size={28} color="#111" />

        <View style={s.cardContent}>
          <Text style={s.primaryTitle}>Browse Menu</Text>

          <Text style={s.primarySubtitle}>Explore delicious food</Text>
        </View>
      </TouchableOpacity>

      {/* TRACK ORDER */}
      <TouchableOpacity
        style={s.secondaryCard}
        activeOpacity={0.9}
        accessibilityLabel="Track Order"
        accessibilityRole="button"
        onPress={() => router.push("/order")}
      >
        <Ionicons name="time" size={28} color="#FF8C32" />

        <View style={s.cardContent}>
          <Text style={s.cardTitle}>Track Order</Text>

          <Text style={s.cardSubtitle}>See cooking progress</Text>
        </View>
      </TouchableOpacity>

      {/* CART */}
      <TouchableOpacity
        style={s.secondaryCard}
        activeOpacity={0.9}
        accessibilityLabel="View Cart"
        accessibilityRole="button"
        onPress={() => router.push("/cart")}
      >
        <Ionicons name="bag-handle" size={28} color="#FF8C32" />

        <View style={s.cardContent}>
          <Text style={s.cardTitle}>View Cart</Text>

          <Text style={s.cardSubtitle}>Review your order</Text>
        </View>
      </TouchableOpacity>

      {/* RESCAN */}
      <TouchableOpacity
        style={s.rescanButton}
        activeOpacity={0.8}
        accessibilityLabel="Rescan QR Code"
        accessibilityRole="button"
        onPress={handleRescan}
      >
        <Ionicons name="qr-code" size={18} color="#fff" />

        <Text style={s.rescanText}>Scan Another Table</Text>
      </TouchableOpacity>
    </View>
  );
}
