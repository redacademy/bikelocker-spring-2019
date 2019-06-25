import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Easing, Animated } from "react-native";
import NavigationLayout from "./NavigationLayout";
import LockerModal from "../screens/Locker";

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Locker: { screen: LockerModal, gestureResponseDistance: 50 }
    },
    {
      mode: "modal",
      headerMode: "none",
      transparentCard: true,
      defaultNavigationOptions: {
        gesturesEnabled: true
      }
    }
  )
);
