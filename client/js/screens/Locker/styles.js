import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

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
    backgroundColor: theme.mediumGreen,
    padding: 3
  },
  button2: {
    flexDirection: "row",
    height: 40,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.mediumGreen,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 3
  },
  btnFont1: {
    color: "white",
    fontFamily: theme.titleFont
  },
  btnFont2: {
    color: theme.mediumGreen,
    fontFamily: theme.titleFont
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
    marginRight: 15,
    resizeMode: "contain"
  },
  reviewBox: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    width: width * 0.7
  },
  address: {
    fontFamily: theme.titleFont,
    fontSize: 20
  },
  acctName: {
    fontFamily: theme.titleFont,
    fontSize: 15,
    marginBottom: 5
  },
  time: {
    fontFamily: theme.subheadingFont,
    fontSize: 10,
    marginBottom: 10
  },
  review: {
    fontFamily: theme.subheadingFont,
    fontSize: 15
  },
  rating: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  placeholder: {
    backgroundColor: theme.lightGrey,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: height * 0.2,
    padding: 20,
    marginBottom: 30,
    marginTop: 10
  },
  placeholderPrompt: {
    textAlign: "center"
  }
});

export default styles;
