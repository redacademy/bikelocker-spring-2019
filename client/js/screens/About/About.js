import React from "react";
import { Text, View, Button } from "react-native";
import { withNavigation } from "react-navigation";

const About = ({ navigation }) => (
  <View>
    <Text>This is the About Screen</Text>
    <Button
      onPress={() => {
        navigation.push("Locker");
      }}
      title="Locker Info"
      color="#841584"
    />
  </View>
);

export default withNavigation(About);
