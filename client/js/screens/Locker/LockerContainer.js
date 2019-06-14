import React, { Component } from "react";
import Locker from "./Locker";

export default class LockerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Locker />;
  }
}
