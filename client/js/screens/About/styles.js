import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    top: 40,
    marginHorizontal: 20
  },
  h2: {
    fontFamily: theme.titleFont,
    fontSize: theme.titleFontSize,
    color: theme.black
  },
  p: {
    fontFamily: theme.bodyFont,
    fontSize: theme.commonFontSize,
    paddingTop: 10,
    lineHeight: 25
  },
  image: {
    top: 60,
    padding: 20,
    height: 150,
    width: 150,
    overflow: "visible",
    alignSelf: "center"
  }
});

export default styles;
