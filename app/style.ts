import { StyleSheet } from "react-native";

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

export default s;
