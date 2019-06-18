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
import { withNavigation } from "react-navigation";

class AuthWelcome extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

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
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.btnFont}> Register </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.btnFont}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(AuthWelcome);
