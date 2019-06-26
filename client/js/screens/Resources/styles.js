import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 20
  },
  h2: {
    fontSize: theme.titleFontSize,
    color: theme.black
  },
  p: {
    fontSize: theme.commonFontSize,
    paddingTop: 10,
    lineHeight: 25,
    marginBottom: 5
  },
  link: {
    color: theme.darkGreen,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: theme.captionFont
  }
});

export default styles;
