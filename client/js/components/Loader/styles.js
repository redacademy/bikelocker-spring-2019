import theme from "../../config/globalStyles";
import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    color: theme.mediumGreen,
    top: height / 2.3

  }
});

export default styles;
