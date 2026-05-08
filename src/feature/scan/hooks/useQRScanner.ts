import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

const table = {
  id: "R001",
  name: "Sushi Zen",
  table_id: "T001",
};

export function useQRScanner() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [locked, setLocked] = useState(false);

  const onScan = useCallback(
    async (data: string) => {
      if (locked) return;

      setLocked(true);

      const match = data.match(/ipot:\/\/table\/(.+)/i);

      if (match?.[1]) {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success,
        );

        setLoading(true);

        setTimeout(() => {
          router.replace({
            pathname: "/menu",
            params: {
              table: table.table_id,
            },
          });
        }, 600);

        return;
      } else {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

        Alert.alert(
          "❌ Invalid QR",
          "Scan a valid table QR (ipot://table/{id})",
          [
            {
              text: "OK",
              onPress: () => {
                // aktifkan scan lagi setelah alert ditutup
                setLocked(false);
              },
            },
          ],
        );
      }
    },
    [locked, router],
  );

  return {
    loading,
    locked,
    onScan,
  };
}
