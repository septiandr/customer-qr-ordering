import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import s from "./style";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1A120B", "#3C2A21", "#D5CEA3"]}
      style={s.container}
    >
      <StatusBar style="light" />

      <SafeAreaView style={s.safe}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.logo}>🍽️</Text>

          <Text style={s.title}>iPot Restaurant</Text>

          <Text style={s.subtitle}>
            Scan QR meja untuk melihat menu dan mulai memesan makanan favoritmu
          </Text>
        </View>

        {/* Main Card */}
        <View style={s.card}>
          <Text style={s.cardTitle}>Mulai Pesanan</Text>

          <Text style={s.cardText}>
            Arahkan kamera ke QR code yang tersedia di meja restoran.
          </Text>

          <TouchableOpacity
            style={s.scanButton}
            onPress={() => router.push("/scan")}
            activeOpacity={0.85}
          >
            <Text style={s.scanIcon}>📷</Text>

            <Text style={s.scanButtonText}>Scan QR Meja</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.demoButton}
            onPress={() =>
              router.push({
                pathname: "/menu",
                params: { table: "T001" },
              })
            }
          >
            <Text style={s.demoButtonText}>Demo Tanpa Scan</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.footerText}>
            Fast Ordering • Cashless • Easy Dining
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
