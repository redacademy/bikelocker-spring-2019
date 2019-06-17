import React, { Component } from "react";
import AuthWelcome from "./AuthWelcome";
class AuthWelcome extends Component {
  static navigationOptions = {
    title: "SignIn"
  };

  render() {
    return <AuthWelcome />;
  }
}

export default AuthWelcomeContainer;
