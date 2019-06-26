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
  image: {
    marginVertical: 20,
    top: height / 18
  },
  image1: {
    alignSelf: "center"
  },
  bold: {
    fontWeight: "bold"
  }
});

export default styles;
