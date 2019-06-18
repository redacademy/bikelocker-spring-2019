import React, { Component } from "react";
import { Text } from "react-native";
import Login from "./Login";

class LoginContainer extends Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    return <Login navigation={this.props.navigation} />;
  }
}

export default LoginContainer;
