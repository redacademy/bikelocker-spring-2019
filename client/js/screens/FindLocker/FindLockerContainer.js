import React, { Component } from "react";
import FindLocker from "./FindLocker";
import { View } from "react-native";
import styles from "./styles";

class FindLockerContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return <FindLocker />;
  }
}

export default FindLockerContainer;
