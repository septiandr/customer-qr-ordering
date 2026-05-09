import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  centered: {
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    color: "#fff",
  },

  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    color: "#999",
    marginTop: 4,
  },

  contentPadding: {
    paddingBottom: 40,
  },

  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#fff",
  },

  itemCard: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  itemText: {
    color: "#ccc",
    marginTop: 2,
  },

  customizationContainer: {
    marginTop: 6,
  },

  customizationText: {
    color: "#888",
    fontSize: 13,
  },

  summaryText: {
    fontSize: 16,
    marginBottom: 4,
    color: "#ddd",
  },
  sectionCard: {
    marginTop: 24,
    marginHorizontal: 20,
    padding: 18,
    backgroundColor: "#1A1A1A",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  summaryLabel: {
    color: "#AAA",
    fontSize: 15,
  },

  summaryValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#2A2A2A",
  },

  grandTotalLabel: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },

  grandTotal: {
    color: "#FF8C32",
    fontSize: 20,
    fontWeight: "800",
  },

  noteText: {
    color: "#B0B0B0",
    lineHeight: 24,
    fontSize: 14,
  },
});

export default s;
