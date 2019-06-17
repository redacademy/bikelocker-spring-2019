import React from "react";
import { Text, View, Button } from "react-native";
import { withNavigation } from "react-navigation";

const FindLocker = ({ navigation }) => (
  <View>
    <Text>This is the Find Locker screen</Text>
  </View>
);

export default withNavigation(FindLocker);
