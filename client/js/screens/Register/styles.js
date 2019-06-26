import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    width: width * 0.6,
    marginTop: height * 0.1,
    marginBottom: height * 0.06,
    resizeMode: "contain"
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  form: {
    alignItems: "center",
    width: width * 0.75
  },
  button1: {
    flexDirection: "row",
    height: 40,
    width: "35%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.mediumGreen,
    padding: 3,
    margin: 10
  },
  btnFont: {
    color: "white",
    fontFamily: theme.titleFont
  },
  labelText: {
    fontFamily: theme.bodyFont,
    padding: 10,
    color: theme.mediumGreen,
    alignSelf: "flex-start"
  },
  formField: {
    width: "100%"
  },
  formInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.lightGrey,
    width: "100%",
    height: height * 0.06,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 10
  },
  text: {
    fontFamily: theme.bodyFont,
    marginTop: 15
  },
  link: {
    color: theme.orange,
    textDecorationLine: "underline"
  },
  errorMsg: {
    fontFamily: theme.bodyFont,
    color: "red",
    marginTop: 10
  }
});

export default styles;
