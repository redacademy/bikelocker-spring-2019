import React, { Component } from "react";
import Authentication from "./Authentication";
class AuthenticationContainer extends Component {
  static navigationOptions = {
    title: "SignIn"
  };

  render() {
    return <Authentication />;
  }
}

export default AuthenticationContainer;
