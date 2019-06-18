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

  goToRegister = () => {
    this.props.navigation.navigate("Register");
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

        <Form
          onSubmit={(this._signInAsync, this.goToRegister, this.handleInput)}
          render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.form}>
              <Text style={styles.labelText}>Email Address</Text>
              <Field
                name="Email Address"
                render={({ input, meta }) => (
                  <View style={styles.formInput}>
                    <TextInput
                      onSubmit={handleSubmit}
                      editable={true}
                      maxLength={40}
                    />
                  </View>
                )}
              />
              <Text style={styles.labelText}>Password</Text>
              <Field
                name="Password"
                render={({ input, meta }) => (
                  <View style={styles.formInput}>
                    <TextInput
                      onSubmit={handleSubmit}
                      editable={true}
                      secureTextEntry={true}
                    />
                  </View>
                )}
              />

              <Text>Forgot your password?</Text>

              <Text>
                Don't have an account yet?
                <Text onPress={this.handleInput}> Register</Text>
              </Text>

              <TouchableOpacity
                style={styles.button1}
                onPress={this._signInAsync}
              >
                <Text style={styles.btnFont}> Login </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Login;
