import theme from "../../config/globalStyles";

const styles = {
  container: {
    ...theme.container,
    height: "100%",
    marginLeft: "7%",
    marginRight: "7%",
    justifyContent: "flex-start"
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  title: {
    fontSize: theme.subheadingFontSize,
    color: theme.black,
    fontWeight: "bold"
  },
  link: {
    ...theme.link
  },
  profilePic: {
    margin: 35,
    height: 150,
    width: 150,
    resizeMode: "contain",
    borderRadius: 75
  },
  info: {
    width: "100%",
    alignContent: "flex-start"
  },
  userName: {
    fontSize: theme.subheadingFontSize,
    color: theme.darkGrey,
    fontWeight: "bold"
  },
  userLocation: {
    fontSize: theme.commonFontSize,
    color: theme.darkGrey
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
