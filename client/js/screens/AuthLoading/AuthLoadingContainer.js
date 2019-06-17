import React, { Component } from "react";
<<<<<<< HEAD
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
=======
import { Text } from "react-native";

export default class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Text>This is the AuthLoading container</Text>;
  }
}
>>>>>>> 6deeb47... add authentication to Navigation layout and create AuthLoading and Authentication screen folders
