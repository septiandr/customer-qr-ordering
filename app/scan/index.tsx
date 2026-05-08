import { ScanScreen } from "@/src/feature/scan/screen/scanner";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const QRScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <ScanScreen />
    </SafeAreaView>
  );
};

export default QRScreen;
