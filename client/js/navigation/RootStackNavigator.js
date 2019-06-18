import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import LockerModal from "../screens/Locker";

import AuthWelcomeScreen from "../screens/AuthWelcome";
import AuthLoadingScreen from "../screens/AuthLoading";
// import AuthenticationScreen from "../screens/Authentication";

const AuthStack = createStackNavigator({
  Welcome: AuthWelcomeScreen
  // Authentication: AuthenticationScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Layout: NavigationLayout,
      Locker: LockerModal
    },
    {
      initialRouteName: "AuthLoading"
    },
    { mode: "modal", headerMode: "none" }
  )
);
