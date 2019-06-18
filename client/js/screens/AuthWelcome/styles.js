import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    width: width,
    height: height
  },
  logo: {
    width: width * 0.28,
    height: height * 0.28,
    marginTop: height * 0.1,
    marginBottom: height * 0.45,
    resizeMode: "contain"
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button1: {
    flexDirection: "row",
    height: 40,
    width: "35%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#009887",
    padding: 3,
    margin: 10
  },
  button2: {
    flexDirection: "row",
    height: 40,
    width: "35%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 3,
    margin: 10
  },
  btnFont: {
    color: "white",
    fontFamily: globalStyles.titleFont
  },
  hello: {
    color: "#009887"
  }
});

export default styles;
