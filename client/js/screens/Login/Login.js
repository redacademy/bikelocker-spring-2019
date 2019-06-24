import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  goToRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    const { navigation, authenticate } = this.props;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
            />

            <Form
              onSubmit={async values => {
                try {
                  const response = await authenticate({
                    variables: { ...values }
                  });
                } catch (e) {
                  throw e;
                }
              }}
              render={({ handleSubmit, pristine, invalid }) => (
                <View style={styles.form}>
                  <Text style={styles.labelText}>Email Address</Text>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <View style={styles.formInput}>
                        <TextInput
                          {...input}
                          value={input.value}
                          editable={true}
                          autoCapitalize="none"
                          placeholder="email"
                        />
                      </View>
                    )}
                  />
                  <Text style={styles.labelText}>Password</Text>
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <View style={styles.formInput}>
                        <TextInput
                          {...input}
                          value={input.value}
                          keyboardType="default"
                          editable={true}
                          placeholder="password"
                          secureTextEntry={true}
                        />
                      </View>
                    )}
                  />

                  <Text style={styles.errorMessage}>{this.state.error}</Text>

                  <Text style={styles.text}>Forgot your password?</Text>

                  <Text style={styles.text}>
                    Don't have an account yet?{" "}
                    <Text style={styles.link} onPress={this.goToRegister}>
                      Register
                    </Text>
                  </Text>

                  <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                      handleSubmit, navigation.navigate("FindLocker");
                    }}
                  >
                    <Text style={styles.btnFont}> Login </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{ flex: 1 }} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
