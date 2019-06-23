import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    top: 40,
    marginHorizontal: 20
  },
  h2: {
    fontSize: theme.titleFontSize,
    color: theme.black
  },
  p: {
    fontSize: theme.commonFontSize,
    paddingTop: 10,
    lineHeight: 25
  },
  image: {
    padding: 20,
    width: width * 0.9,
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default styles;
