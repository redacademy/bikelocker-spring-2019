import { StyleSheet, Dimensions } from "react-native";
import theme from "../../config/globalStyles";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
  mapView: {
    height,
    width
  },
  actionBtn: {
    position: "absolute",
    top: height / 1.9
  },
  actionBtn2: {
    position: "absolute",
    top: height / 1.5
  }
});

export default styles;
