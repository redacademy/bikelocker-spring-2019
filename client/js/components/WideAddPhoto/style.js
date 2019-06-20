import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: "#009887",
    height: Dimensions.get("window").height * 0.17,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },
  cameraIcon: {
    color: "#fff",
    fontSize: 40
  },
  cameraText: {
    color: "#fff",
    flex: 1,
    justifyContent: "center"
  }
});

export default styles;
