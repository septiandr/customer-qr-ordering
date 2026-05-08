import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useCartStore } from "@/src/feature/cart/store/cart.store";

export function FloatingCheckoutButton() {
  const router = useRouter();
  const totalItems = useCartStore((state) => state.totalItems);

  const subtotal = useCartStore((state) => state.subtotal);

  if (totalItems <= 0) {
    return null;
  }

  return (
    <View style={s.wrapper}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={s.button}
        onPress={
          () => console.log("first")
          //   router.push("/cart")
        }
      >
        {/* LEFT */}
        <View style={s.left}>
          <View style={s.badge}>
            <Text style={s.badgeText}>{totalItems}</Text>
          </View>

          <View>
            <Text style={s.title}>View Cart</Text>

            <Text style={s.subtitle}>
              {totalItems} item
              {totalItems > 1 ? "s" : ""}
            </Text>
          </View>
        </View>

        {/* RIGHT */}
        <View style={s.right}>
          <Text style={s.price}>${subtotal.toFixed(2)}</Text>

          <Ionicons name="arrow-forward" size={20} color="#111" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 24,
  },

  button: {
    height: 72,
    borderRadius: 24,
    backgroundColor: "#FF8C32",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 18,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  /* =========================
     LEFT
  ========================= */

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  badge: {
    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: "#111",

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 14,
  },

  title: {
    color: "#111",
    fontSize: 17,
    fontWeight: "800",
  },

  subtitle: {
    color: "#3A3A3A",
    marginTop: 2,
    fontSize: 13,
  },

  /* =========================
     RIGHT
  ========================= */

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  price: {
    color: "#111",
    fontSize: 18,
    fontWeight: "800",
  },
});
