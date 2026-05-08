import { Text, TouchableOpacity, View } from "react-native";

import s from "../style/scan.style";
import { ScannerFrame } from "./ScannerFrame";

type Props = {
  loading: boolean;
  onDemo: () => void;
};

export function ScannerOverlay({ loading, onDemo }: Props) {
  return (
    <View style={s.overlay}>
      <View style={s.topContent}>
        <Text style={s.title}>Scan QR Meja</Text>

        <Text style={s.subtitle}>Arahkan kamera ke QR meja</Text>
      </View>

      <ScannerFrame loading={loading} />

      <View style={s.bottomContent}>
        <Text style={s.bottomText}>Scan QR untuk mulai order 🍽️</Text>

        <TouchableOpacity style={s.demoButton} onPress={onDemo}>
          <Text style={s.demoButtonText}>Demo Table</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
