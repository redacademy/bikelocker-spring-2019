import React, { Component } from "react";
import MapViewComponent from "../../components/MapView";
import { Text, Platform } from "react-native";
import styles from "./styles";

class FindSpot extends Component {
  render() {
    return Platform.select({
      ios: <MapViewComponent />,
      android: <Text style={styles.text}>Maps are coming soon!!</Text>
    });
  }
}

export default FindSpot;
