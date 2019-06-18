import { StyleSheet } from "react-native";
import theme from "../../config/globalStyles";

const styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
    zIndex: 0
  },
  locator: {
    backgroundColor: theme.mediumGreen,
    fontSize: 35,
    width: 70,
    textAlign: "center",
    height: 70,
    borderRadius: 35,
    top: "70%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 10
  }
});

export default styles;
