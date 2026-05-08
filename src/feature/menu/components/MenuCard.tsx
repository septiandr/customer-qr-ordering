import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

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

  return (
    <TouchableOpacity
      style={s.card}
      activeOpacity={0.9}
      onPress={() => {
        if (isCustomizable) {
          onPress();
        } else {
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
                onPress={() => decreaseQtyMenu(item.id.toString())}
              >
                <Ionicons name="remove" size={18} color="#fff" />
              </TouchableOpacity>
              <Text style={s.qtyText}>{quantity}</Text>

              <TouchableOpacity
                style={s.qtyButton}
                onPress={() => {
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
              onPress={() => {
                if (isCustomizable) {
                  onClickIncreaseQty(item);
                } else {
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
