import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring,
} from "react-native-reanimated";

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
  const scale = useSharedValue(1);

  useEffect(() => {
    if (totalItems > 0) {
      scale.value = withSequence(
        withSpring(1.4, { damping: 10, stiffness: 100 }),
        withSpring(1, { damping: 10, stiffness: 100 }),
      );
    }
  }, [totalItems, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

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
          <Animated.View
            style={[s.badge, animatedStyle]}
            accessibilityLiveRegion="polite"
          >
            <Text style={s.badgeText}>{totalItems}</Text>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
}
