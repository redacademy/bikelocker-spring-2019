import React, { Component } from "react";
import { Text } from "react-native";
import Register from "./Register";

class RegisterContainer extends Component {
  static navigationOptions = {
    title: "Register"
  };

  render() {
    return <Register />;
  }
}

export default RegisterContainer;
