import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width / 1.5;
const height = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height
  },
  image: {
    width,
    height
  }
});

export default styles;
