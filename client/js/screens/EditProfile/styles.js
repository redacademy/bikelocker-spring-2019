import theme from "../../config/globalStyles";

const styles = {
  header: {
    width: "30%",
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: theme.subheadingFontSize,
    color: theme.black,
    fontWeight: "bold"
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 0
  },
  activeTab: {
    width: "50%",
    borderBottomWidth: 5,
    borderBottomColor: theme.mediumGreen
  },
  inactiveTab: {
    width: "50%",
    borderBottomWidth: 5,
    borderBottomColor: theme.lightGrey
  },
  activeTabLabel: {
    textAlign: "center",
    color: theme.mediumGreen,
    paddingBottom: 5
  },
  inactiveTabLabel: {
    textAlign: "center",
    color: theme.lightGrey,
    paddingBottom: 5
  }
};

export default styles;
