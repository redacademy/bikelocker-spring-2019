import React, { Component } from "react";
import {
  TouchableOpacity,
  AsyncStorage,
  View,
  Text,
  Image,
  TextInput
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };
  handleInput = () => {
    console.log("something submitted");
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("FindLocker");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />

        <Text style={styles.labelText}>Full Name</Text>
        <Form
          onSubmit={this._signInAsync}
          render={({ handleSubmit, pristine, invalid }) => (
            <View>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <View style={styles.form}>
                    <TextInput
                      onSubmit={handleSubmit}
                      editable={true}
                      maxLength={40}
                    />
                  </View>
                )}
              />
            </View>
          )}
        />
        <TouchableOpacity style={styles.button1} onPress={this._signInAsync}>
          <Text style={styles.btnFont}> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
