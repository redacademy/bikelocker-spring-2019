import React from "react";
import {
  View,
  Image,
  Button,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

class AuthWelcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../../assets/images/image.png")}
        />
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/vertical/white.png")}
        />
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.btnFont}> Register </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.btnFont}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AuthWelcome;
