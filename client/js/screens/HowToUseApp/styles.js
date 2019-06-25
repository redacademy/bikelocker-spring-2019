import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
    lineHeight: 25,
    marginBottom: 5
  },
  image: {
    padding: 20,
    width: width * 0.9,
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default styles;
