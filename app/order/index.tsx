import OrderTrackingScreen from "@/src/feature/order/screen/order";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#111",
        }}
      >
        <OrderTrackingScreen />
      </SafeAreaView>
    </>
  );
};

export default OrderScreen;
