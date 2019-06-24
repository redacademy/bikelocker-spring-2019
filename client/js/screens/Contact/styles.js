import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  h2: {
    fontSize: theme.titleFontSize,
    fontWeight: "bold",
    color: theme.black,
    marginTop: 20
  },

  p: {
    fontSize: 16,
    marginVertical: 20
  },
  comment: {
    color: theme.mediumGreen
  },
  textInput: {
    padding: 10,
    height: 130,
    borderColor: "rgb(210,210,210)",
    borderWidth: 2,
    borderRadius: 20
  },
  btn: {
    marginTop: 20,
    width: 130,
    height: 45,
    borderRadius: 30,
    backgroundColor: theme.mediumGreen,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  btn2: {
    marginTop: 20,
    width: 130,
    height: 45,
    borderRadius: 30,
    backgroundColor: theme.mediumGreen,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: theme.white,
    fontSize: 16
  },
  thanks: {
    color: theme.mediumGreen,
    fontSize: 35,
    fontWeight: "bold"
  },
  subHeading: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20
  },
  modalView: {
    top: height / 2.6,
    backgroundColor: "white",
    height: "25%",
    borderRadius: 20,
    padding: 10,
    alignItems: "center"
  }
});

export default styles;
