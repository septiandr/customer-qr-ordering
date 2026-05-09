import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";

import { useCartStore } from "@/src/feature/cart/store/cart.store";

import s from "../styles/menu.menu-card.style";
import { MenuItem } from "../types/menu.type";

type Props = {
  item: MenuItem;
  onPress: () => void;
  onClickIncreaseQty: (item: MenuItem) => void;
};

export function getQuantityById(
  items: { id: number; quantity: number }[],
  id: number,
) {
  return items
    .filter((item) => item.id === id)
    .reduce((acc, item) => acc + item.quantity, 0);
}

export function MenuCard({ item, onPress, onClickIncreaseQty }: Props) {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQtyById = useCartStore((state) => state.increaseQtyById);
  const decreaseQtyMenu = useCartStore((state) => state.decreaseQtyMenu);
  const isCustomizable = item.customization_groups?.length > 0;
  const quantity = getQuantityById(cart, item.id);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatePop = () => {
    scale.value = withSequence(
      withSpring(1.2, { damping: 10, stiffness: 100 }),
      withSpring(1, { damping: 10, stiffness: 100 }),
    );
  };

  return (
    <TouchableOpacity
      style={s.card}
      activeOpacity={0.9}
      accessibilityLabel={`Menu item: ${item.name}, Price: $${item.price.toFixed(2)}`}
      accessibilityRole="button"
      accessibilityHint={
        isCustomizable
          ? "Opens customization options for this item"
          : "Adds this item to your cart"
      }
      onPress={() => {
        if (isCustomizable) {
          onPress();
        } else {
          animatePop();
          addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            image_url: item.image_url,
          });
        }
      }}
    >
      <Image
        source={{
          uri: item.image_url ?? "https://via.placeholder.com/300",
        }}
        style={s.image}
      />
      <View style={s.content}>
        <Text style={s.name}>{item.name}</Text>

        <Text style={s.description}>{item.description}</Text>

        <View style={s.bottom}>
          <Text style={s.price}>${item.price.toFixed(2)}</Text>

          {quantity > 0 ? (
            <View style={s.qtyContainer}>
              <TouchableOpacity
                style={s.qtyButton}
                accessibilityLabel="Decrease quantity"
                accessibilityRole="button"
                accessibilityHint={`Reduces the number of ${item.name} in your cart`}
                onPress={() => {
                  animatePop();
                  decreaseQtyMenu(item.id.toString());
                }}
              >
                <Ionicons name="remove" size={18} color="#fff" />
              </TouchableOpacity>
              <Animated.Text
                style={[s.qtyText, animatedStyle]}
                accessibilityLabel={`Quantity: ${quantity}`}
                accessibilityLiveRegion="polite"
              >
                {quantity}
              </Animated.Text>

              <TouchableOpacity
                style={s.qtyButton}
                accessibilityLabel="Increase quantity"
                accessibilityRole="button"
                accessibilityHint={`Increases the number of ${item.name} in your cart`}
                onPress={() => {
                  animatePop();
                  if (isCustomizable) {
                    onClickIncreaseQty(item);
                  } else {
                    increaseQtyById(item.id.toString());
                  }
                }}
              >
                <Ionicons name="add" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={s.addButton}
              accessibilityLabel={`Add ${item.name} to cart`}
              accessibilityRole="button"
              onPress={() => {
                if (isCustomizable) {
                  onClickIncreaseQty(item);
                } else {
                  animatePop();
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image_url: item.image_url,
                  });
                }
              }}
            >
              <Ionicons name="add" size={18} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
