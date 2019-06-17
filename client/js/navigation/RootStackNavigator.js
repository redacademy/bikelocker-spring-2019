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

const AuthStack = createStackNavigator({
  SignIn: AuthWelcomeScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Layout: NavigationLayout,
      Locker: LockerModal
    },
    { mode: "modal", headerMode: "none" }
  )
);
