import { Ionicons } from "@expo/vector-icons";

import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  onRetry: () => void;
};

export function MenuError({ onRetry }: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      <Ionicons name="cloud-offline" size={64} color="#FF8C32" />

      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "700",
          marginTop: 18,
        }}
      >
        Failed to load menu
      </Text>

      <TouchableOpacity
        onPress={onRetry}
        style={{
          marginTop: 24,
          backgroundColor: "#FF8C32",
          paddingHorizontal: 24,
          height: 50,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#111",
            fontWeight: "800",
          }}
        >
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
}
