import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import PropTypes from "prop-types";
import IconEntypo from "react-native-vector-icons/Entypo";
import theme from "../config/globalStyles";

const AppHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerStyle: {
    backgroundColor: theme.mediumGreen,
    height: 60,
    zIndex: -10
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontSize: 18,
    color: "white"
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <IconEntypo
        name="menu"
        size={45}
        color="#fff"
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  ),
  headerTitle: (
    <TouchableOpacity>
      <Image
        source={require("../assets/images/bikelockerlogo-white.png")}
        style={{ width: 40, height: 40, marginBottom: 5 }}
      />
    </TouchableOpacity>
  )
});

AppHeader.propTypes = {
  props: PropTypes.object,
  navigation: PropTypes.object.isRequired
};
