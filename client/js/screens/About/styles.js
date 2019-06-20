import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    top: 40,
    marginHorizontal: 20
  },
  h2: {
    fontSize: theme.titeFontSize,
    color: theme.black
  },
  p: {
    fontSize: theme.commonFontSize,
    paddingTop: 10,
    lineHeight: 25
  },
  image: {
    marginTop: 60,
    padding: 20,
    height: 150,
    width: 150,
    overflow: "visible",
    alignSelf: "center"
  }
});

export default styles;
