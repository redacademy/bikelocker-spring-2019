import theme from "../../config/globalStyles";

const styles = {
  container: {
    ...theme.container,
    height: "100%",
    marginHorizontal: "8%",
    justifyContent: "flex-start"
  },
  profilePic: {
    margin: 35,
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
    marginTop: 10
  },
  textInput: {
    color: theme.black,
    borderColor: theme.lightGrey,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10
  },
  subheading: {
    marginTop: 25,
    fontSize: theme.subheadingFontSize,
    color: theme.darkGrey
  },
  caption: {
    fontSize: theme.commonFontSize,
    color: theme.darkGrey,
    fontWeight: "bold"
  }
};

export default styles;
