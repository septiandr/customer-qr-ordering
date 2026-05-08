import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  header: {
    padding: 20,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: "#222",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },

  subtitle: {
    color: "#999",
    marginTop: 4,
  },

  listContent: {
    padding: 20,
    paddingBottom: 140,
  },

  separator: {
    height: 16,
  },

  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#222",
    backgroundColor: "#111",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  totalLabel: {
    color: "#999",
  },

  totalValue: {
    color: "#FF8C32",
    fontWeight: "800",
    fontSize: 18,
  },

  checkoutButton: {
    marginTop: 16,
    backgroundColor: "#FF8C32",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  checkoutButtonText: {
    color: "#111",
    fontWeight: "800",
    fontSize: 16,
  },
});

export default s;
