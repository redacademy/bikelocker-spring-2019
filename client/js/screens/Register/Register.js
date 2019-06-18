import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";

class Register extends Component {
  static navigationOptions = {
    title: "Register"
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.btnFont}> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
