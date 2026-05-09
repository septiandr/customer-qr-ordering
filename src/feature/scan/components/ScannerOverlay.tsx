import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

import s from "../style/scan.style";
import { ScannerFrame } from "./ScannerFrame";

type Props = {
  loading: boolean;
  onDemo: () => void;
};

export function ScannerOverlay({ loading, onDemo }: Props) {
  const { t } = useTranslation();
  return (
    <View style={s.overlay}>
      <View style={s.topContent}>
        <Text style={s.title}>{t("scan.title")}</Text>

        <Text style={s.subtitle}>{t("scan.subtitle")}</Text>
      </View>

      <ScannerFrame loading={loading} />

      <View style={s.bottomContent}>
        <Text style={s.bottomText}>{t("scan.start_order")}</Text>

        <TouchableOpacity
          style={s.demoButton}
          onPress={onDemo}
          accessibilityLabel={t("scan.demo_table")}
          accessibilityRole="button"
        >
          <Text style={s.demoButtonText}>{t("scan.demo_table")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
