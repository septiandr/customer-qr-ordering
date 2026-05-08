import { Text, View } from "react-native";

type Props = {
  status: string;
};

export function OrderStatusCard({ status }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1A1A1A",
        marginHorizontal: 20,
        borderRadius: 24,
        padding: 24,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "#999",
        }}
      >
        Current Status
      </Text>

      <Text
        style={{
          color: "#FF8C32",
          fontSize: 28,
          fontWeight: "800",
          marginTop: 10,
          textTransform: "capitalize",
        }}
      >
        {status}
      </Text>
    </View>
  );
}
