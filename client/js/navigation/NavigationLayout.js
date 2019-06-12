import React from "react";
<<<<<<< HEAD
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
=======
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import FindLockerScreen from "../screens/FindLocker";
import ProfileScreen from "../screens/Profile";
>>>>>>> add all pages to drawer menu
import AboutScreen from "../screens/About";
import ContactScreen from "../screens/Contact";
import HowToUseAppScreen from "../screens/HowToUseApp";
import ResourcesScreen from "../screens/Resources";
import { sharedNavigationOptions } from "./config";

const FindLockerStack = createStackNavigator(
  {
    Find: FindLockerScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
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
    Contact: ContactScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const HowToUseAppStack = createStackNavigator(
  {
    HowToUseApp: HowToUseAppScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

<<<<<<< HEAD
export default createBottomTabNavigator(
=======
const ResourcesStack = createStackNavigator(
>>>>>>> add all pages to drawer menu
  {
    Resources: ResourcesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Find: FindLockerStack,
    Profile: ProfileStack,
    About: AboutStack,
    Contact: ContactStack,
    HowToUseApp: {
      screen: HowToUseAppStack,
      navigationOptions: ({ navigation }) => ({
        title: "How to Use the App"
      })
    },
    Resources: {
      screen: ResourcesStack,
      navigationOptions: ({ navigation }) => ({
        title: "Helpful Resources"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    drawerWidth: 250,
    contentOptions: {
      // activeTintColor: theme.colors.purple,
      // inactiveTintColor: theme.colors.mediumGrey,
      // activeBackgroundColor: theme.colors.lightGrey,
      labelStyle: {
        fontSize: 16
      },
      itemsContainerStyle: {
        margin: 0
      },
      iconContainerStyle: {
        margin: 0
      }
    }
  }
);
