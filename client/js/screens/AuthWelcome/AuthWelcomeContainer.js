import React, { Component } from "react";
import AuthWelcome from "./AuthWelcome";
class AuthWelcomeContainer extends Component {
  static navigationOptions = {
    title: "SignIn"
  };

  render() {
    return <AuthWelcome />;
  }
}

export default AuthWelcomeContainer;
