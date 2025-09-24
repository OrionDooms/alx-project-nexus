import PostCard from "@/app/PostCard";
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
  backgroundImageContainer: {
    flex: 1,
    padding: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutButton: {
    fontSize: 16,
    color: "#ff4d4d",
    fontWeight: "bold",
  },
  PostCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },
  postTitleAlt: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postBodyAlt: {
    fontSize: 14,
    color: "#333",
  },
});

export { styles };