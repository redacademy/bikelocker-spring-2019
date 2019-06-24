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
import validate from "../../helpers/validation";
import styles from "./styles";
import { setUserIdToken } from "../../config/models";

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
                  if (response.data.authenticateUser) {
                    const { id, token } = response.data.authenticateUser;
                    await setUserIdToken(id, token);
                    navigation.navigate("FindLocker");
                  }
                } catch (e) {
                  return e;
                }
              }}
              validate={validate}
              render={({ handleSubmit, pristine, invalid }) => (
                <View style={styles.form}>
                  <Text style={styles.labelText}>Email Address</Text>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <View style={styles.formField}>
                        <View style={styles.formInput}>
                          <TextInput
                            {...input}
                            value={input.value}
                            editable={true}
                            autoCapitalize="none"
                            placeholder="email"
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
                    name="password"
                    render={({ input, meta }) => (
                      <View style={styles.formField}>
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
                        <View>
                          {meta.error && meta.touched && (
                            <Text style={styles.errorMsg}>{meta.error}</Text>
                          )}
                        </View>
                      </View>
                    )}
                  />

                  <Text style={styles.text}>Forgot your password?</Text>

                  <Text style={styles.text}>
                    Don't have an account yet?{" "}
                    <Text style={styles.link} onPress={this.goToRegister}>
                      Register
                    </Text>
                  </Text>

                  <TouchableOpacity
                    style={styles.button1}
                    onPress={handleSubmit}
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
