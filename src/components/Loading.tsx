import { useTranslation } from "react-i18next";
import { ActivityIndicator, Text, View } from "react-native";

export function Loading() {
  const { t } = useTranslation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        justifyContent: "center",
        alignItems: "center",
      }}
      accessibilityRole="none"
      accessibilityLabel="Loading content"
      accessibilityLiveRegion="polite"
    >
      <ActivityIndicator
        size="large"
        color="#FF8C32"
        accessibilityRole="progressbar"
      />

      <Text
        style={{
          color: "#fff",
          marginTop: 16,
        }}
      >
        {t("common.loading")}
      </Text>
    </View>
  );
}
