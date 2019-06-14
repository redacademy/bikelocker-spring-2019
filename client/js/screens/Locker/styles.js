import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles.js";

const { width } = Dimensions.get("window");
const height = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer: {
    flex: 1,
    margin: 15
  },
  icon: {
    width: 25,
    height: 25
  },
  button1: {
    flexDirection: "row",
    height: 40,
    width: "43%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: globalStyles.mediumGreen,
    padding: 3
  },
  button2: {
    flexDirection: "row",
    height: 40,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: globalStyles.mediumGreen,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 3
  },
  btnFont1: {
    color: "white",
    fontFamily: globalStyles.titleFont
  },
  btnFont2: {
    color: globalStyles.mediumGreen,
    fontFamily: globalStyles.titleFont
  },
  twoBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 15
  },
  roundedProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  reviewer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10
  },
  //Text
  address: {
    fontFamily: globalStyles.titleFont,
    fontSize: 20
  },
  acctName: {
    fontFamily: globalStyles.titleFont,
    fontSize: 15
  },
  time: {
    fontFamily: globalStyles.subheadingFont,
    fontSize: 10,
    marginBottom: 4
  },
  review: {
    // fontFamily: globalStyles.bodyFont,
    fontFamily: globalStyles.subheadingFont,
    fontSize: 15
  }
});

export default styles;
