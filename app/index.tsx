import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

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
            onPress={() => router.push("/qr")}
            activeOpacity={0.85}
          >
            <Text style={s.scanIcon}>📷</Text>

            <Text style={s.scanButtonText}>Scan QR Meja</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.demoButton}
            onPress={() => router.push("/menu?table=T001")}
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

const s = StyleSheet.create({
  container: {
    flex: 1,
  },

  safe: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingVertical: 30,
  },

  header: {
    marginTop: 40,
    alignItems: "center",
  },

  logo: {
    fontSize: 72,
    marginBottom: 18,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 12,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 30,
    padding: 28,
    backdropFilter: "blur(10px)",
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },

  cardText: {
    fontSize: 15,
    color: "rgba(255,255,255,0.82)",
    lineHeight: 24,
    marginBottom: 28,
  },

  scanButton: {
    backgroundColor: "#FF8C32",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  scanIcon: {
    fontSize: 20,
  },

  scanButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  demoButton: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
  },

  demoButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  footer: {
    alignItems: "center",
    marginBottom: 10,
  },

  footerText: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
