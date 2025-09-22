import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#242834",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 16,
  },
  postCard: {
    backgroundColor: "#2E3440",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ECEFF4",
  },
  postBody: {
    marginTop: 8,
    fontSize: 14,
    color: "#D8DEE9",
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  actionText: {
    color: "#88C0D0",
    fontWeight: "500",
  },
  navLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navText: {
    fontSize: 16,
    color: "#81A1C1",
    fontWeight: "500",
  },
});

export { styles };