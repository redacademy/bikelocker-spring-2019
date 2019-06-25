import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import Loader from "../../components/Loader";

class AuthLoading extends Component {
  render() {
    return (
      <View>
        <Loader />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
