import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import LockerModal from "../screens/Locker";
import OnboardingScreen from "../screens/Onboarding";
import AuthWelcomeScreen from "../screens/AuthWelcome/AuthWelcomeContainer";
import AuthLoadingScreen from "../screens/AuthLoading";
import RegisterScreen from "../screens/Register";
import LoginScreen from "../screens/Login";

const AuthStack = createStackNavigator({
  Welcome: {
    screen: AuthWelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Layout: NavigationLayout,
      Locker: LockerModal,
      Onboarding: OnboardingScreen
    },
    {
      initialRouteName: "AuthLoading"
    },
    {
      mode: "modal",
      headerMode: "none",
      transparentCard: true,
      defaultNavigationOptions: {
        gesturesEnabled: true,
      },
    },
  ),
);
