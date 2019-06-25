import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const About = () => (
  <View style={styles.container}>
    <Text style={styles.h2}>About Bike Locker</Text>
    <Text style={styles.p}>
      Bike Locker is an app that enables cyclists to find safe parking for their
      bicycle in Vancouver. Using the app, users can locate an available space,
      map their route, and rate and review the space.
    </Text>
    <Image
      source={require("../../assets/images/bikelockerlogo.png")}
      style={styles.image}
    />
  </View>
);

export default About;
