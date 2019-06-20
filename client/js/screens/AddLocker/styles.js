import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  allContainer: {
    paddingTop: 5
  },
  container: {
    width: "80%",
    alignSelf: "center"
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
