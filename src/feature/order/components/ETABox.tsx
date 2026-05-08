import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  eta: number;
};

export function ETABox({ eta }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#222",
        marginHorizontal: 20,
        marginTop: 18,
        borderRadius: 18,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Ionicons name="time-outline" size={22} color="#FF8C32" />

      <View
        style={{
          marginLeft: 12,
        }}
      >
        <Text
          style={{
            color: "#999",
          }}
        >
          Estimated Time
        </Text>

        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
            marginTop: 4,
          }}
        >
          {eta} minutes remaining
        </Text>
      </View>
    </View>
  );
}
