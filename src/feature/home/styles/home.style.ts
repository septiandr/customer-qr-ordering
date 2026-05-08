import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 24,
    justifyContent: "center",
  },

  /* =========================
     HEADER
  ========================= */

  header: {
    marginBottom: 42,
  },

  welcome: {
    color: "#FF8C32",
    fontSize: 18,
    fontWeight: "700",
  },

  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    marginTop: 8,
  },

  description: {
    color: "#999",
    marginTop: 12,
    lineHeight: 22,
    fontSize: 15,
  },

  /* =========================
     CARDS
  ========================= */

  primaryCard: {
    backgroundColor: "#FF8C32",
    borderRadius: 26,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  secondaryCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 26,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#222",
  },

  cardContent: {
    marginLeft: 16,
    flex: 1,
  },

  primaryTitle: {
    color: "#111",
    fontSize: 18,
    fontWeight: "800",
  },

  primarySubtitle: {
    color: "#4b2f12",
    marginTop: 4,
    fontSize: 14,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },

  cardSubtitle: {
    color: "#999",
    marginTop: 4,
    fontSize: 14,
  },

  /* =========================
     RESCAN BUTTON
  ========================= */

  rescanButton: {
    marginTop: 18,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderColor: "#333",
  },

  rescanText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default s;
