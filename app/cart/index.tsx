import CartScreenUI from "@/src/feature/cart/screen/CartScreen";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
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
        <CartScreenUI />
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
