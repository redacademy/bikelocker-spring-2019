import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    width: width * 0.9,
    height: height * 0.35,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10
  },
  thankYou: {
    fontSize: 40,
    color: theme.mediumGreen,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 15
  },
  modalText: {
    padding: 30,
    textAlign: "center"
  },
  continueContainer: {
    height: 35,
    width: "50%",
    borderStyle: "solid",
    backgroundColor: theme.mediumGreen,
    borderRadius: 20,
    alignContent: "center",
    color: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  continue: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default styles;
