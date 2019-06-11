import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import ContactScreen from "../screens/Contact";
import HowToUseAppScreen from "../screens/HowToUseApp";
import ProfileScreen from "../screens/Profile";
import FindLockerScreen from "../screens/FindLocker";
import { sharedNavigationOptions } from "./config";
import theme from "../config/styles";

const FindLockerStack = createStackNavigator(
  {
    FindLocker: FindLockerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
    HowToUseApp: HowToUseAppScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    HowToUseApp: HowToUseAppScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Contact: ContactStack,
    FindLocker: FindLockerStack,
    Profile: ProfileStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === "Contact") {
          iconName = `ios-calendar`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        } else if (routeName === "Profile") {
          iconName = `ios-heart`;
        } else if (routeName === "FindLocker") {
          iconName = `ios-map`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999",
      labelStyle: {
        fontSize: 10,
        fontFamily: theme.fontRegular
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
