import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { _signInAsync } from "../../config/models.js";

class Login extends Component {
  handleInput = () => {
    console.log("something submitted");
  };

  goToRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />

        <Form
          onSubmit={(_signInAsync, this.goToRegister, this.handleInput)}
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
                onPress={() => {
                  _signInAsync();
                  this.props.navigation.navigate("FindLocker");
                }}
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
