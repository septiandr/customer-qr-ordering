import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    padding: 16,
    borderRadius: 18,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  price: {
    color: "#FF8C32",
    marginTop: 4,
  },

  options: {
    marginTop: 8,
  },

  optionText: {
    color: "#999",
    fontSize: 12,
    marginTop: 2,
  },

  bottom: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  minusButton: {
    backgroundColor: "#FF8C32",
    padding: 6,
    borderRadius: 8,
  },

  plusButton: {
    backgroundColor: "#FF8C32",
    padding: 6,
    borderRadius: 8,
  },

  qtyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  totalPrice: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
  },
});

export default s;
