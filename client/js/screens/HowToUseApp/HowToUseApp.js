import React from "react";
import { ScrollView, Text, Image } from "react-native";
import styles from "./styles";

const HowToUseApp = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.h2}>About the App</Text>
    <Text style={styles.p}>
      Search for secure bike parking using the map or search bar. The closest
      bike racks to your destination will show up as pins on the map.
    </Text>
    <Image
      source={require("../../assets/images/pinDiagramWithLabel.png")}
      style={styles.image}
    />
    <Text style={styles.p}>
      Pin colours indicate different risk levels in the area. Pin information is
      input by fellow Bike Locker users. You can provide information about bike
      parking already listed on the map or, if not already on the map, you can
      add it. User reviews update location security levels. Your contributions
      will help make bike parking safer for the local cycling community and make
      you eligible for rewards from Bike Locker partners.
    </Text>
  </ScrollView>
);

export default HowToUseApp;
