import React, { Component } from "react";
import { View } from "react-native";
import FindSpotContainer from "./screens/FindSpot";

export default class App extends Component {
  render() {
    return (
      <View>
        <FindSpotContainer />
      </View>
    );
  }
}
