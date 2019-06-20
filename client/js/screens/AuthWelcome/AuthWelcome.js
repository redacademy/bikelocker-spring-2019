import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

class AuthWelcome extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={styles.btnRow}>
        {/* <Button
          style={styles.button}
          title="Sign in"
          onPress={() => this.props.navigation.navigate("Authentication")}
        >
          Sign In
        </Button> */}

        <Button style={styles.button} title="Register">
          Register
        </Button>
      </View>
    );
  }
}

export default AuthWelcome;
