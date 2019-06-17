import React from "react";
import { Text, AsyncStorage, View, Button } from "react-native";

class AuthWelcome extends React.Component {
  static navigationOptions = {
    title: "SignIn"
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" />
        <Button title="Register!" />
      </View>
    );
  }
}

export default AuthWelcome;
