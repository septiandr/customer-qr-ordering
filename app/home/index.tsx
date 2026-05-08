import TableHomeScreen from "@/src/feature/home/screen/home";
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
        <TableHomeScreen />
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
