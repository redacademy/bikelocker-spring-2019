import React, { Component } from "react";
import Onboarding from "./Onboarding";

class OnboardingContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return <Onboarding />;
  }
}

export default OnboardingContainer;
