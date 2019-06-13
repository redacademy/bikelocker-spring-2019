import React, { Component } from "react";
import FindSpot from "./FindSpot";
import { View } from "react-native";
import styles from "./styles";

class FindSpotContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return <FindSpot />;
  }
}

export default FindSpotContainer;
