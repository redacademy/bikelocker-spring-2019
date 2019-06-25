import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles.js";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer: {
    flex: 1,
    margin: 20
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 6
  },
  arrow: {
    maxWidth: width / 12,
    maxHeight: width / 12,
    resizeMode: "contain"
  },
  icon: {
    maxWidth: width / 12,
    maxHeight: width / 12
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
    color: "white"
    // fontFamily: globalStyles.titleFont
  },
  btnFont2: {
    color: globalStyles.mediumGreen
    // fontFamily: globalStyles.titleFont
  },
  twoBtns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 15
  },
  roundedProfileImage: {
    maxWidth: width / 7,
    maxHeight: width / 7,
    borderRadius: width / 14,
    marginRight: 10,
    resizeMode: "contain"
  },
  reviewBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    width: width * 0.7
  },
  address: {
    // fontFamily: globalStyles.titleFont,
    fontSize: 20
  },
  acctName: {
    // fontFamily: globalStyles.titleFont,
    fontSize: 15
  },
  time: {
    // fontFamily: globalStyles.subheadingFont,
    fontSize: 10,
    marginBottom: 4
  },
  review: {
    // fontFamily: globalStyles.subheadingFont,
    fontSize: 15
  },
  rating: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  placeholder: {
    backgroundColor: globalStyles.lightGrey,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: height * 0.3,
    padding: 20,
    marginBottom: 30
  },
  promptPlaceholder: {
    alignSelf: "center"
  }
});

export default styles;
