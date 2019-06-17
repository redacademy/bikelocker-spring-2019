import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import AuthLoading from "./AuthLoading";
class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    this.props.navigation.navigate(userToken ? "FindLocker" : "Welcome");
  };

  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;
