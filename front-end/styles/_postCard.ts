import { act } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Card: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
    body: {
        fontSize: 14,
        marginVertical: 5,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
  });

export { styles };