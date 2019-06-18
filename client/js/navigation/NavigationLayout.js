import React from "react";
import { Image, View, SafeAreaView, Button, AsyncStorage } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import EditProfileScreen from "../screens/EditProfile";
import FindLockerScreen from "../screens/FindLocker";
import ProfileScreen from "../screens/Profile";
import AboutScreen from "../screens/About";
import ContactScreen from "../screens/Contact";
import HowToUseAppScreen from "../screens/HowToUseApp";
import ResourcesScreen from "../screens/Resources";

import { sharedNavigationOptions } from "./config";
import IconIonicons from "react-native-vector-icons/Ionicons";
import theme from "../config/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
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
        height: 90,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <IconIonicons
          name="ios-arrow-back"
          size={40}
          color="#fff"
          style={{ marginLeft: 15, marginTop: 12 }}
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/images/bikelockerlogo-white.png")}
        style={{ width: 40, height: 40, marginTop: 10 }}
      />
      <View style={{ width: 40, marginRight: 10 }} />
    </View>
    <DrawerItems {...props} />
  </View>
);
export default createDrawerNavigator(
  {
    FindLocker: {
      screen: FindLockerStack,
      navigationOptions: ({ navigation }) => ({
        title: "Find a spot"
      })
    },
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
    contentComponent: props => <DrawerContent {...props} />,
    contentComponent: props => (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <DrawerItems {...props} />
          <Button
            title="Logout"
            onPress={async () => {
              await AsyncStorage.clear();
              props.navigation.navigate("AuthLoading");
            }}
          />
        </SafeAreaView>
      </View>
    ),
    overlayColor: "black"
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    drawerWidth: "80%",
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
