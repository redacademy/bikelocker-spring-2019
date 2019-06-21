import React, { Component } from "react";
import { Text, View, StatusBar, ActivityIndicator } from "react-native";
import AuthLoading from "./AuthLoading";
import { getUserToken } from "../../config/models";

class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    try {
      const userToken = await getUserToken();
      this.props.navigation.navigate(userToken ? "FindLocker" : "Welcome");
    } catch (e) {
      throw e;
    }
  };

  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;
