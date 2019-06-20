import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  p: {
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
  page2: {
    flex: 1
  }
});

export default styles;
