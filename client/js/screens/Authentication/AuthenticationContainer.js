import React, { Component } from "react";
import Authentication from "./Authentication";

export default class AuthenticationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Authentication />;
  }
}
