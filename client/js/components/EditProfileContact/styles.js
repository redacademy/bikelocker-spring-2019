import theme from "../../config/globalStyles";

const styles = {
  container: {
    ...theme.container,
    height: "100%",
    marginHorizontal: "8%",
    justifyContent: "flex-start"
  },
  profilePic: {
    marginTop: 35,
    marginBottom: 10,
    height: 150,
    width: 150
  },
  form: {
    width: "100%",
    alignContent: "flex-start"
  },
  labelText: {
    color: theme.mediumGreen,
    marginBottom: 5,
    marginTop: 15
  },
  textInput: {
    width: "100%",
    color: theme.black,
    borderColor: theme.lightGrey,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  twoFields: {
    flexDirection: "row"
  },
  provinceContainer: {
    width: "20%"
  },
  countryContainer: {
    width: "70%",
    marginLeft: "10%"
  },
  ageInput: {
    width: "25%",
    color: theme.black,
    borderColor: theme.lightGrey,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25
  },
  backButton: {
    flexDirection: "row",
    height: 40,
    width: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.lightGrey,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 3
  },
  backButtonLabel: {
    color: theme.black
  },
  submitButton: {
    flexDirection: "row",
    height: 40,
    width: "43%",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.mediumGreen,
    padding: 3
  },
  submitButtonLabel: {
    color: theme.white
  }
};

export default styles;
