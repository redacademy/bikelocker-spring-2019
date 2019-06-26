import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  p: {
    fontFamily: theme.bodyFont,
    fontSize: theme.subheadingFontSize,
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    marginHorizontal: 40
  },
  bold: {
    fontSize: theme.subheadingFontSize,
    fontWeight: "bold"
  },
  page: {
    flex: 1
  },
  image: {
    top: height / 18
  }
});

export default styles;
