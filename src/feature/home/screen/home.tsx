import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { Text, TouchableOpacity, View } from "react-native";

import { useCartStore } from "@/src/feature/cart/store/cart.store";

import { useTableStore } from "../store/table.store";
import s from "../styles/home.style";

export default function TableHomeScreen() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

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
      {/* LANGUAGE SWITCHER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => i18n.changeLanguage("en")}
          style={{
            padding: 8,
            backgroundColor: i18n.language === "en" ? "#FF8C32" : "#222",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: i18n.language === "en" ? "#111" : "#fff" }}>
            EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => i18n.changeLanguage("zh")}
          style={{
            padding: 8,
            backgroundColor: i18n.language === "zh" ? "#FF8C32" : "#222",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: i18n.language === "zh" ? "#111" : "#fff" }}>
            中文
          </Text>
        </TouchableOpacity>
      </View>

      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.welcome}>{t("home.welcome")}</Text>

        <Text style={s.title}>Table {currentTable}</Text>

        <Text style={s.description}>{t("home.home_description")}</Text>
      </View>

      {/* MENU */}
      <TouchableOpacity
        style={s.primaryCard}
        activeOpacity={0.9}
        accessibilityLabel={t("home.browse_menu")}
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
          <Text style={s.primaryTitle}>{t("home.browse_menu")}</Text>

          <Text style={s.primarySubtitle}>
            {t("home.browse_menu_subtitle")}
          </Text>
        </View>
      </TouchableOpacity>

      {/* TRACK ORDER */}
      <TouchableOpacity
        style={s.secondaryCard}
        activeOpacity={0.9}
        accessibilityLabel={t("home.track_order")}
        accessibilityRole="button"
        onPress={() => router.push("/order")}
      >
        <Ionicons name="time" size={28} color="#FF8C32" />

        <View style={s.cardContent}>
          <Text style={s.cardTitle}>{t("home.track_order")}</Text>

          <Text style={s.cardSubtitle}>{t("home.track_order_subtitle")}</Text>
        </View>
      </TouchableOpacity>

      {/* CART */}
      <TouchableOpacity
        style={s.secondaryCard}
        activeOpacity={0.9}
        accessibilityLabel={t("home.view_cart")}
        accessibilityRole="button"
        onPress={() => router.push("/cart")}
      >
        <Ionicons name="bag-handle" size={28} color="#FF8C32" />

        <View style={s.cardContent}>
          <Text style={s.cardTitle}>{t("home.view_cart")}</Text>

          <Text style={s.cardSubtitle}>{t("home.view_cart_subtitle")}</Text>
        </View>
      </TouchableOpacity>

      {/* RESCAN */}
      <TouchableOpacity
        style={s.rescanButton}
        activeOpacity={0.8}
        accessibilityLabel={t("home.scan_another")}
        accessibilityRole="button"
        onPress={handleRescan}
      >
        <Ionicons name="qr-code" size={18} color="#fff" />

        <Text style={s.rescanText}>{t("home.scan_another")}</Text>
      </TouchableOpacity>
    </View>
  );
}
