import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import PropTypes from "prop-types";

const AppHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <AppHeader {...props} />,
  headerStyle: {
    backgroundColor: "#009887"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontSize: 18,
    color: "white"
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image
        source={require("../assets/images/hamburgermenu.png")}
        style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
      />
    </TouchableOpacity>
  ),
  headerTitle: (
    <TouchableOpacity>
      <Image
        source={require("../assets/images/bikelockerlogo.png")}
        style={{ width: 40, height: 40, marginBottom: 5 }}
      />
    </TouchableOpacity>
  ),
  headerRight: (
    <TouchableOpacity>
      <Image
        source={require("../assets/images/location.png")}
        style={{ width: 30, height: 30, margin: 5, marginRight: 10 }}
      />
    </TouchableOpacity>
  )
});

AppHeader.propTypes = {
  props: PropTypes.object,
  navigation: PropTypes.object.isRequired
};
