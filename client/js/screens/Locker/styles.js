import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles.js";

const { width } = Dimensions.get("window");
const height = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center"
    // justifyContent: "flex-start"
  },
  infoContainer: {
    flex: 1,
    // alignItems: "center"
    // justifyContent: "flex-start",
    margin: 15
  },
  icon: {
    width: 25,
    height: 25
  },
  button1: {
    flexDirection: "row",
    height: 40,
    width: "40%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#009887",
    padding: 3
  },
  button2: {
    flexDirection: "row",
    height: 40,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#009887",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 3
  },
  btnFont1: {
    color: "white"
  },
  btnFont2: {
    color: "#009887"
  },
  twoBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10
  },
  roundedProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  reviewer: {
    flexDirection: "row",
    paddingTop: 10
  }
});

export default styles;
