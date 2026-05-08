import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", paddingTop: 14 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 14,
  },
  searchWrapper: { flex: 1 },
  cartButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    minWidth: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: "#FF8C32",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: { color: "#111", fontSize: 11, fontWeight: "800" },
  titleContainer: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 14 },
  title: { color: "#fff", fontSize: 28, fontWeight: "800" },
  subtitle: { color: "#999", marginTop: 6, fontSize: 14 },
  listContent: { paddingHorizontal: 20, paddingBottom: 140 },
});

export default s;
