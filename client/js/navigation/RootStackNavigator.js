import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { Easing, Animated } from "react-native";
import NavigationLayout from "./NavigationLayout";
import LockerModal from "../screens/Locker";

import AuthWelcomeScreen from "../screens/AuthWelcome";
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
      Locker: { screen: LockerModal, gestureResponseDistance: 50 }
    },
    {
      initialRouteName: "AuthLoading"
    },
    {
      mode: "modal",
      headerMode: "none",
      transparentCard: false,
      defaultNavigationOptions: {
        gesturesEnabled: true
      }
    }
  )
);
