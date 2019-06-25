import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20
  },
  h2: {
    fontSize: globalStyles.titleFontSize,
    color: globalStyles.black
  },
  p: {
    fontSize: globalStyles.commonFontSize,
    paddingTop: 10,
    lineHeight: 25,
    marginBottom: 5
  },
  link: {
    color: globalStyles.darkGreen,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: globalStyles.captionFont
  }
});

export default styles;
