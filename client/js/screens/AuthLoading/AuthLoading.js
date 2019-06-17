import React from "react";
import {
  ActivityIndicator,
  Button,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

// import React from "react";
// import { Text, Button, TouchableOpacity } from "react-native";

// const AuthLoading = ({ params }) => (
//   <View>
//     <Text>This is the Find Locker Screen</Text>
//     <Button>Login</Button>
//     <Button>Signup</Button>
//   </View>
// );

// export default AuthLoading;
