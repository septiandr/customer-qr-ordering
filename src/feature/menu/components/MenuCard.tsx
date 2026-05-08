import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../types/menu.type";

type Props = {
  item: MenuItem;
  onPress: () => void;
};

export function MenuCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={s.card} onPress={onPress}>
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

          <View style={s.button}>
            <Ionicons name="add" size={18} color="#fff" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 24,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 18,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  description: {
    color: "#aaa",
    marginTop: 8,
  },

  bottom: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#FF8C32",
    fontWeight: "700",
    fontSize: 18,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FF8C32",
    justifyContent: "center",
    alignItems: "center",
  },
});
