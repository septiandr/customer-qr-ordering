import { Text, View } from "react-native";
import { ORDER_STATUS, OrderStatus } from "../constant/order-status";

type Props = {
  currentStatus: OrderStatus;
};

export function OrderTimeline({ currentStatus }: Props) {
  const currentIndex = ORDER_STATUS.indexOf(currentStatus);

  return (
    <View
      style={{
        marginTop: 30,
        paddingHorizontal: 24,
      }}
    >
      {ORDER_STATUS.map((status, index) => {
        const active = index <= currentIndex;

        return (
          <View
            key={status}
            style={{
              flexDirection: "row",
              marginBottom: 28,
            }}
          >
            {/* DOT */}
            <View
              style={{
                width: 18,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  backgroundColor: active ? "#FF8C32" : "#333",
                }}
              />

              {index !== ORDER_STATUS.length - 1 && (
                <View
                  style={{
                    width: 2,
                    flex: 1,
                    backgroundColor: active ? "#FF8C32" : "#333",
                    marginTop: 4,
                  }}
                />
              )}
            </View>

            {/* TEXT */}
            <View
              style={{
                marginLeft: 16,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  color: active ? "#fff" : "#666",

                  fontWeight: active ? "700" : "400",

                  textTransform: "capitalize",
                }}
              >
                {status}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
