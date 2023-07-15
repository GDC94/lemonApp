import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#000522",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: 10,
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textSymbol: {
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 10
  },
  image: {
    width: 30,
    height: 30,
  },
});
