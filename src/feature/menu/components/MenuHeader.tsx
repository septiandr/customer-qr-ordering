import { Ionicons } from "@expo/vector-icons";

import { Text, TouchableOpacity, View } from "react-native";

import { SearchBar } from "../components/SearchBar";

import s from "../styles/menu.style";

type Props = {
  search: string;

  onSearch: (v: string) => void;

  totalItems: number;

  onPressCart: () => void;
};

export function MenuHeader({
  search,
  onSearch,
  totalItems,
  onPressCart,
}: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={s.searchWrapper}>
        <SearchBar value={search} onChange={onSearch} />
      </View>

      <TouchableOpacity
        style={s.cartButton}
        activeOpacity={0.8}
        onPress={onPressCart}
        accessibilityLabel={`View cart, ${totalItems} items`}
        accessibilityRole="button"
        accessibilityHint="Opens the shopping cart to review and checkout your order"
      >
        <Ionicons name="bag-handle" size={22} color="#fff" />

        {totalItems > 0 && (
          <View style={s.badge} accessibilityLiveRegion="polite">
            <Text style={s.badgeText}>{totalItems}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
