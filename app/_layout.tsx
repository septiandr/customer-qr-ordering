import { QueryProvider } from "@/src/lib/query/query-provider";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerBackTitle: "Back",
            headerTintColor: "#007AFF",
          }}
        />
      </QueryProvider>
    </SafeAreaProvider>
  );
}
