import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import LockerModal from "../screens/Locker";

export default createAppContainer(
  createStackNavigator(
    { Layout: NavigationLayout, Locker: LockerModal },
    { mode: "modal", headerMode: "none" }
  )
);
