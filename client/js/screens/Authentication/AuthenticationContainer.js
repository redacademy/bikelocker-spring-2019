import React, { Component } from "react";
import { Text } from "react-native";
import Authentication from "./Authentication";

class AuthenticationContainer extends Component {
  static navigationOptions = {
    title: "Authentication"
  };

  render() {
    return <Authentication />;
  }
}

export default AuthenticationContainer;
