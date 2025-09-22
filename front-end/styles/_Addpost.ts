import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#242834",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  fabText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
    modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
    modalContent: {
        width: "85%",
        backgroundColor: "#2E3440",
        borderRadius: 12,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#B6FF00FF",
        marginBottom: 15,
    },
    input: {
        backgroundColor: "#3B4252",
        color: "#ECEFF4",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    modalButtons: {
        backgroundColor: "#B6FF00FF",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    modalButtonText: {
        color: "#7D53FF",
        fontSize: 16,
        fontWeight: "600",
    },
    cancelText: {
        color: "#D08770",
        fontSize: 14,
        textAlign: "center",
    },
});

export { styles };