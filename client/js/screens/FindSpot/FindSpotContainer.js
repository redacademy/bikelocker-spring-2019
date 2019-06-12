import React, { Component } from "react";
import FindSpot from "./FindSpot";
import { View } from "react-native";
import styles from "./styles";

class FindSpotContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return (
      <View style={styles.map}>
        <FindSpot />
      </View>
    );
  }
}

export default FindSpotContainer;
