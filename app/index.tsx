import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const appName = process.env.EXPO_PUBLIC_APP_NAME || "iPot Restaurant";

  return (
    <View style={s.container}>
      <StatusBar style="light" />

      {/* HERO IMAGE */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        }}
        resizeMode="cover"
        style={s.hero}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.85)"]}
          style={s.overlay}
        >
          <SafeAreaView style={s.safe}>
            {/* TOP */}
            <View style={s.topSection}>
              <View style={s.logoContainer}>
                <Ionicons name="restaurant" size={28} color="#fff" />
              </View>

              <Text style={s.title}>{appName}</Text>

              <Text style={s.subtitle}>
                Smart dining experience with QR ordering, instant checkout, and
                seamless restaurant service.
              </Text>
            </View>

            {/* BOTTOM CARD */}
            <View style={s.bottomCard}>
              <Text style={s.cardTitle}>Start Your Order</Text>

              <Text style={s.cardDescription}>
                Scan the QR code available on your table to browse the menu and
                order instantly.
              </Text>

              {/* PRIMARY BUTTON */}
              <TouchableOpacity
                style={s.scanButton}
                activeOpacity={0.85}
                onPress={() => router.push("/scan")}
              >
                <Ionicons name="scan" size={22} color="#111" />

                <Text style={s.scanButtonText}>Scan Table QR</Text>
              </TouchableOpacity>

              {/* SECONDARY BUTTON */}
              <TouchableOpacity
                style={s.demoButton}
                activeOpacity={0.8}
                onPress={() =>
                  router.push({
                    pathname: "/menu",
                    params: {
                      table: "T001",
                    },
                  })
                }
              >
                <Text style={s.demoButtonText}>Continue Demo</Text>
              </TouchableOpacity>

              {/* FEATURES */}
              <View style={s.featuresRow}>
                <View style={s.featureItem}>
                  <Ionicons name="flash" size={18} color="#FF8C32" />

                  <Text style={s.featureText}>Fast Ordering</Text>
                </View>

                <View style={s.featureItem}>
                  <Ionicons name="wallet" size={18} color="#FF8C32" />

                  <Text style={s.featureText}>Cashless</Text>
                </View>

                <View style={s.featureItem}>
                  <Ionicons name="sparkles" size={18} color="#FF8C32" />

                  <Text style={s.featureText}>Premium Service</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  hero: {
    flex: 1,
  },

  overlay: {
    flex: 1,
  },

  safe: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 28,
  },

  topSection: {
    marginTop: 40,
  },

  logoContainer: {
    width: 68,
    height: 68,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
    backdropFilter: "blur(12px)",
  },

  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "800",
    lineHeight: 48,
  },

  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    lineHeight: 26,
    marginTop: 18,
    maxWidth: "90%",
  },

  bottomCard: {
    backgroundColor: "rgba(18,18,18,0.95)",
    borderRadius: 32,
    padding: 24,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
  },

  cardDescription: {
    color: "#A0A0A0",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
  },

  scanButton: {
    marginTop: 28,
    backgroundColor: "#FF8C32",
    borderRadius: 18,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  scanButtonText: {
    color: "#111",
    fontWeight: "800",
    fontSize: 16,
  },

  demoButton: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 18,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },

  demoButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  featuresRow: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  featureItem: {
    alignItems: "center",
    gap: 8,
  },

  featureText: {
    color: "#BDBDBD",
    fontSize: 12,
    fontWeight: "600",
  },
});
