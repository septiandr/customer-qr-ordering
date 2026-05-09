import { Ionicons } from "@expo/vector-icons";

import { Text, View } from "react-native";

export function MenuEmpty() {
  return (
    <View
      style={{
        paddingTop: 80,
        alignItems: "center",
      }}
    >
      <Ionicons name="restaurant-outline" size={60} color="#444" />

      <Text
        style={{
          color: "#999",
          marginTop: 16,
          fontSize: 16,
        }}
      >
        No menu found
      </Text>
    </View>
  );
}
