import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: "#009887",
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").height * 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 20,
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
