import { ActivityIndicator, Text, View } from "react-native";

export function MenuLoading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#FF8C32" />

      <Text
        style={{
          color: "#fff",
          marginTop: 16,
        }}
      >
        Loading menu...
      </Text>
    </View>
  );
}
