import { MenuScreen } from "@/src/feature/menu/screen/menu";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Menu() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <MenuScreen />
    </SafeAreaView>
  );
}
