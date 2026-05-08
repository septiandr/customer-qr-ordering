import { ActivityIndicator, View } from "react-native";
import s from "../style/scan.style";

type Props = {
  loading: boolean;
};

export function ScannerFrame({ loading }: Props) {
  return (
    <View style={s.scannerWrapper}>
      <View style={s.scannerBox}>
        <View style={[s.corner, s.topLeft]} />

        <View style={[s.corner, s.topRight]} />

        <View style={[s.corner, s.bottomLeft]} />

        <View style={[s.corner, s.bottomRight]} />

        {loading && <ActivityIndicator size="large" color="#fff" />}
      </View>
    </View>
  );
}
