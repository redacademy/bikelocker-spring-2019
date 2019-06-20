import React, { Component } from "react";
import OnboardingScreens from "./Onboarding";

class OnboardingContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    return <OnboardingScreens />;
  }
}

export default OnboardingContainer;
