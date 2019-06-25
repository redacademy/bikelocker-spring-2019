import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    color: globalStyles.mediumGreen
  }
});

export default styles;
