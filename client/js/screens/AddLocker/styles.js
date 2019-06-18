import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center"
  },
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
  },
  address: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    width: "100%"
  },
  ratingText: {
    textAlign: "center",
    padding: 10,
    color: "#009887"
  },
  lockerDesc: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  secureText: {
    color: "#999999",
    fontSize: 10
  },
  commentText: {
    padding: 10,
    color: "#009887"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20
  },
  back: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: 100,
    textAlign: "center",
    padding: 3
  },
  submit: {
    flex: 1,
    flexDirection: "row",

    padding: 3
  },
  backSpacing: {
    padding: 20,
    paddingRight: 20,
    flex: 1,
    alignItems: "center",
    height: 20,
    width: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    borderRadius: 20,
    textAlign: "center",
    color: "#000"
  },
  submitSpacing: {
    padding: 20,
    marginLeft: 20,
    flex: 1,
    alignItems: "center",
    height: 20,
    width: 100,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    backgroundColor: "#999999",
    borderRadius: 20,
    textAlign: "center",
    color: "#000"
  },
  form: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    width: "100%",
    height: 120,
    alignSelf: "center",
    borderRadius: 10
  }
});

export default styles;
