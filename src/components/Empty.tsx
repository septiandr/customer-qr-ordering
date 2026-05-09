import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

import { Text, View } from "react-native";

export function Empty({ text }: { text?: string }) {
  const { t } = useTranslation();
  return (
    <View
      style={{
        paddingTop: 80,
        alignItems: "center",
      }}
    >
      <Ionicons name="restaurant-outline" size={60} color="#444" />

      <Text
        style={{
          color: "#999",
          marginTop: 16,
          fontSize: 16,
        }}
      >
        {text || t("common.data_not_found")}
      </Text>
    </View>
  );
}
