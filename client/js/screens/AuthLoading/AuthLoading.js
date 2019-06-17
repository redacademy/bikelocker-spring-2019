import React, { Component } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

class AuthLoading extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
