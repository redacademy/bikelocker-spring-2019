import theme from "../../config/globalStyles";

const styles = {
  container: {
    ...theme.container,
    height: "100%",
    justifyContent: "flex-start"
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
    width: 150,
    height: 150,
    borderRadius: 75
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
