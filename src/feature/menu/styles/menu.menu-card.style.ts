import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 24,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 18,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  description: {
    color: "#AAA",
    marginTop: 8,
    lineHeight: 22,
  },

  bottom: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: "#FF8C32",
    fontWeight: "700",
    fontSize: 18,
  },

  /* =========================
     ADD BUTTON
  ========================= */

  addButton: {
    minWidth: 42,
    minHeight: 42,
    padding: 8,
    borderRadius: 14,
    backgroundColor: "#FF8C32",
    justifyContent: "center",
    alignItems: "center",
  },

  /* =========================
     QTY CONTROLS
  ========================= */

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
  },

  qtyButton: {
    minWidth: 32,
    minHeight: 32,
    padding: 4,
    borderRadius: 10,
    backgroundColor: "#FF8C32",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    minWidth: 20,
    textAlign: "center",
  },
});

export default s;
