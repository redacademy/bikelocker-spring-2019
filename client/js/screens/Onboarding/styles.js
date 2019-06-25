import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

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
    marginTop: 30
  }
});

export default styles;
