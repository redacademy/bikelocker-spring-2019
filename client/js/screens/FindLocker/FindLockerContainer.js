import React, { Component } from "react";
import FindLocker from "./FindLocker";

class FindLockerContainer extends Component {
  static navigationOptions = {
<<<<<<< HEAD
    title: "Find Spot"
  };
=======
    title: "FindLocker"
  };

>>>>>>> 003cbd7... move switchNavigator to RootStackNavigator and implement AuthLoading to check for user token
  render() {
    return <FindLocker />;
  }
}

export default FindLockerContainer;
