import React, { Component } from "react";
import FindLocker from "./FindLocker";

class FindLockerContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return <FindLocker />;
  }
}

export default FindLockerContainer;
