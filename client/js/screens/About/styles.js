import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    top: 40,
    marginLeft: 20,
    marginRight: 20
  },
  h2: {
    fontSize: theme.titeFontSize,
    color: theme.black
    // fontFamily: theme.titleFont
  },
  p: {
    // fontFamily: theme.bodyFont,
    fontSize: theme.commonFontSize,
    paddingTop: 10,
    lineHeight: 25
  },
  image: {
    padding: 20,
    height: 200,
    width: 200,
    alignSelf: "center"
  }
});

export default styles;
