import Permission from "@/src/feature/scan/components/Permission";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";
import { Stack, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import s from "../../src/feature/scan/style/scan.style";

export default function QRScreen() {
  const router = useRouter();

  const [perm, reqPerm] = useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false);

  const onScan = useCallback(
    async (data: string) => {
      if (locked) return;

      setLocked(true);

      const match = data.match(/ipot:\/\/table\/(.+)/i);

      if (data) {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success,
        );

        setLoading(true);

        setTimeout(() => {
          router.replace({
            pathname: "/menu",
            params: { table: 1 },
          });
        }, 600);
      } else {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

        Alert.alert(
          "QR Tidak Valid",
          "Silakan scan QR meja restoran yang valid.",
          [
            {
              text: "OK",
              onPress: () => setLocked(false),
            },
          ],
        );
      }
    },
    [router, locked],
  );

  useEffect(() => {
    if (!perm?.granted) reqPerm();
  }, [perm, reqPerm]);

  if (!perm?.granted) {
    return <Permission reqPerm={reqPerm} />;
  }

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" />

      <Stack.Screen options={{ headerShown: false }} />

      <CameraView
        style={s.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={loading || locked ? undefined : (e) => onScan(e.data)}
      >
        {/* dark overlay */}
        <View style={s.overlay}>
          {/* header */}
          <View style={s.topContent}>
            <Text style={s.title}>Scan QR Meja</Text>

            <Text style={s.subtitle}>
              Arahkan kamera ke QR di meja restoran
            </Text>
          </View>

          {/* scanner frame */}
          <View style={s.scannerWrapper}>
            <View style={s.scannerBox}>
              <View style={[s.corner, s.topLeft]} />
              <View style={[s.corner, s.topRight]} />
              <View style={[s.corner, s.bottomLeft]} />
              <View style={[s.corner, s.bottomRight]} />

              {loading && <ActivityIndicator size="large" color="#fff" />}
            </View>
          </View>

          {/* bottom info */}
          <View style={s.bottomContent}>
            <Text style={s.bottomText}>
              Scan QR untuk mulai memesan makanan 🍽️
            </Text>

            <TouchableOpacity
              style={s.demoButton}
              onPress={() => onScan("ipot://table/T001")}
            >
              <Text style={s.demoButtonText}>Demo Table T001</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}
