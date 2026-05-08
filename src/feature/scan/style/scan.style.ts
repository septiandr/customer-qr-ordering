import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  camera: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: "space-between",
  },

  topContent: {
    alignItems: "center",
    marginTop: 40,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },

  scannerWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  scannerBox: {
    width: 270,
    height: 270,
    borderRadius: 24,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  corner: {
    position: "absolute",
    width: 42,
    height: 42,
    borderColor: "#fff",
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopLeftRadius: 18,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 18,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 18,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderBottomRightRadius: 18,
  },

  bottomContent: {
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },

  bottomText: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    textAlign: "center",
  },

  demoButton: {
    backgroundColor: "#FF7A00",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 16,
    minWidth: 180,
    alignItems: "center",
  },

  demoButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  permissionContainer: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    padding: 24,
  },

  permissionCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
  },

  permissionEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },

  permissionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },

  permissionText: {
    color: "#bbb",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },

  permissionButton: {
    backgroundColor: "#FF7A00",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    width: "100%",
    alignItems: "center",
  },

  permissionButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default s;
