import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

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
    backgroundColor: globalStyles.mediumGreen,
    padding: 3,
    margin: 10
  },
  btnFont: {
    color: "white",
    fontFamily: globalStyles.titleFont
  },
  labelText: {
    padding: 10,
    color: globalStyles.mediumGreen,
    alignSelf: "flex-start"
  },
  formField: {
    width: "100%"
  },
  formInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: globalStyles.lightGrey,
    width: "100%",
    height: height * 0.06,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 10
  },
  text: {
    marginTop: 10,
    marginBottom: 10
  },
  link: {
    color: globalStyles.orange,
    textDecorationLine: "underline"
  },
  errorMsg: {
    color: "red",
    marginTop: 10
  }
});

export default styles;
