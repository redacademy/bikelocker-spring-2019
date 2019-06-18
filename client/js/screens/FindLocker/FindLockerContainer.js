import React, { Component } from "react";
import FindLocker from "./FindLocker";

class FindLockerContainer extends Component {
  static navigationOptions = {
    title: "FindLocker"
  };

  render() {
    return <FindLocker />;
  }
}

export default FindLockerContainer;
