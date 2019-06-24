import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center"
  },
  addImageContainer: {
    // flex: 1,
  },
  photoContainer: {
    // flex: 1,
    backgroundColor: "#009887",
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  previewContainer: {
    flex: 1,
    flexDirection: "row"
  },
  previewTouch: {
    flex: 0.5
  },
  previewImage: {
    height: height * 0.2,
    width: width * 0.5
  },
  cameraText: {
    color: "#fff"
  },
  photoContainer: {
    backgroundColor: "#009887",
    height: Dimensions.get("window").height * 0.2,
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
    justifyContent: "center",
    flexWrap: "wrap",
    textAlign: "center"
  },
  addPhotos: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  form: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    width: "100%",
    height: 120,
    borderRadius: 10
  },
  input: {
    height: 120
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  back: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: 100,
    textAlign: "center",
    color: "black"
  },
  submit: {
    flex: 1,
    flexDirection: "row"
  },
  backSpacing: {
    padding: 11,
    paddingRight: 20,
    flex: 1,
    alignItems: "center",
    height: 45,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    borderRadius: 20,
    textAlign: "center",
    color: "#000",
    marginRight: 10
  },
  submitSpacing: {
    padding: 11,
    paddingRight: 20,
    flex: 1,
    alignItems: "center",
    height: 45,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#999999",
    backgroundColor: "#999999",
    borderRadius: 20,
    textAlign: "center",
    color: "#000",
    marginLeft: 10
  }
});

export default styles;
