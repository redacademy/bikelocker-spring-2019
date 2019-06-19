import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  mapView: {
    height,
    width
  },
  addLockerSliderContainer: {},
  locator: {
    height: 70,
    width: 70,
    alignSelf: "flex-end",
    top: height / 1.45,
    right: 20,
    borderRadius: 100,
    backgroundColor: theme.mediumGreen
  },
  arrow: {
    textAlign: "center",
    alignSelf: "center",
    top: 18,
    fontSize: 30,
    color: "white"
  }
});

export default styles;
