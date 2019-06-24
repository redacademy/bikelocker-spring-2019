import React, { Component } from "react";
import OnboardingScreens from "./Onboarding";
import { withNavigation } from "react-navigation";

class OnboardingContainer extends Component {
  static navigationOptions = {
    title: "Find Spot"
  };
  render() {
    const { navigation } = this.props;
    return <OnboardingScreens navigation={navigation} />;
  }
}

export default withNavigation(OnboardingContainer);
