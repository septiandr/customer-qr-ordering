import { Stack } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "../style/scan.style";

const Permission = ({ reqPerm }: { reqPerm: () => void }) => {
  return (
    <SafeAreaView style={s.permissionContainer}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={s.permissionCard}>
        <Text style={s.permissionEmoji}>📷</Text>

        <Text style={s.permissionTitle}>Akses Kamera Dibutuhkan</Text>

        <Text style={s.permissionText}>
          Gunakan kamera untuk scan QR meja dan melihat menu restoran.
        </Text>

        <TouchableOpacity style={s.permissionButton} onPress={reqPerm}>
          <Text style={s.permissionButtonText}>Izinkan Kamera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Permission;
