import React, { Component } from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  Image
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";

class Register extends Component {
  handleSubmit = () => {
    console.log("something submitted");
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />

        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.form}>
              <Text style={styles.labelText}>First Name</Text>
              <Field
                name="First Name"
                render={({ input, meta }) => (
                  <View style={styles.formInput}>
                    <TextInput
                      placeholder="First Name"
                      keyboardType="default"
                      editable={true}
                      value={input.value}
                    />
                  </View>
                )}
              />
              <Text style={styles.labelText}>Email Address</Text>
              <Field
                name="Email Address"
                render={({ input, meta }) => (
                  <View>
                    <View style={styles.formInput}>
                      <TextInput
                        onSubmit={handleSubmit}
                        editable={true}
                        maxLength={40}
                      />
                    </View>
                    <View>
                      {meta.error && meta.touched && (
                        <Text style={styles.errorMsg}>{meta.error}</Text>
                      )}
                    </View>
                  </View>
                )}
              />
              <Text style={styles.labelText}>Password</Text>
              <Field
                name="Password"
                render={({ input, meta }) => (
                  <View>
                    <View style={styles.formInput}>
                      <TextInput
                        onSubmit={handleSubmit}
                        editable={true}
                        secureTextEntry={true}
                      />
                    </View>
                    <View>
                      {meta.error && meta.touched && (
                        <Text style={styles.errorMsg}>{meta.error}</Text>
                      )}
                    </View>
                  </View>
                )}
              />
              <Text>Already have an account?</Text>
              <TouchableOpacity
                style={styles.button1}
                onPress={this._signInAsync}
              >
                <Text style={styles.btnFont}> Login </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Register;
