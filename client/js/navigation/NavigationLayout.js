import React from "react";
import { Image, View, SafeAreaView, Button } from "react-native";
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
import { clearStorage } from "../config/models.js";
import { sharedNavigationOptions } from "./config";
import IconIonicons from "react-native-vector-icons/Ionicons";
import theme from "../config/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddLockerScreen from "../screens/AddLocker";

const FindLockerStack = createStackNavigator(
  {
    FindLocker: FindLockerScreen,
    AddLocker: AddLockerScreen
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
    Profile: {
      screen: ProfileStack,
      navigationOptions: ({ navigation }) => ({
        title: "My Profile"
      })
    },
    About: {
      screen: AboutStack,
      navigationOptions: ({ navigation }) => ({
        title: "About Bike Locker"
      })
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: ({ navigation }) => ({
        title: "Contact Us"
      })
    },
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
              try {
                await clearStorage();
                props.navigation.navigate("AuthLoading");
              } catch (e) {
                throw e;
              }
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
