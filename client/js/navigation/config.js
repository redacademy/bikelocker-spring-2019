import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
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
      <Icon name="md-menu" size={25} color="white" style={{ margin: 15 }} />
    </TouchableOpacity>
  )
});

GradientHeader.propTypes = {
  props: PropTypes.object,
  navigation: PropTypes.object.isRequired
};
