import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="menu/index" options={{ headerShown: false }} />

      <Stack.Screen
        name="menu/detail"
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
