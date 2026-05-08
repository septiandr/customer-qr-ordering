import Permission from "@/src/feature/scan/components/Permission";

import { CameraView, useCameraPermissions } from "expo-camera";

import { Stack } from "expo-router";

import { useEffect } from "react";

import { StatusBar, View } from "react-native";

import { ScannerOverlay } from "../components/ScannerOverlay";

import { useQRScanner } from "../hooks/useQRScanner";
import s from "../style/scan.style";

export function ScanScreen() {
  const [perm, reqPerm] = useCameraPermissions();

  const { loading, locked, onScan } = useQRScanner();

  useEffect(() => {
    if (!perm?.granted) {
      reqPerm();
    }
  }, [perm, reqPerm]);

  if (!perm?.granted) {
    return <Permission reqPerm={reqPerm} />;
  }

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <CameraView
        style={s.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={loading || locked ? undefined : (e) => onScan(e.data)}
      >
        <ScannerOverlay
          loading={loading}
          onDemo={() => onScan("ipot://table/T001")}
        />
      </CameraView>
    </View>
  );
}
