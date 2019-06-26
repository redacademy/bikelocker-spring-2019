import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    color: theme.mediumGreen
  }
});

export default styles;
