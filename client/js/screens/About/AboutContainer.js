import React, { Component } from "react";
import About from "./About";

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <About navigation={this.props.navigation} />;
  }
}
