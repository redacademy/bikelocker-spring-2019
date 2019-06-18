import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const About = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("AddLocker", {})}>
    <Text>This is the About Screen</Text>
  </TouchableOpacity>
);

export default withNavigation(About);
