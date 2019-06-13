import React from "react";
import { Image, View } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import FindLockerScreen from "../screens/FindLocker";
import ProfileScreen from "../screens/Profile";
import AboutScreen from "../screens/About";
import ContactScreen from "../screens/Contact";
import HowToUseAppScreen from "../screens/HowToUseApp";
import ResourcesScreen from "../screens/Resources";
import { sharedNavigationOptions } from "./config";
import theme from "../config/globalStyles";

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

const ResourcesStack = createStackNavigator(
  {
    Resources: ResourcesScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: theme.mediumGreen,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../assets/images/bikelockerlogo.png")}
        style={{ width: 40, height: 40, marginTop: 10 }}
      />
    </View>
    <DrawerItems {...props} />
  </View>
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
  { contentComponent: DrawerContent, overlayColor: "white" },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: theme.mediumGreen,
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
