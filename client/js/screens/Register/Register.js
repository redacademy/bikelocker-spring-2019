import React, { Component } from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Platform,
  SafeAreaView,
  TextInput,
  Text,
  Image
} from "react-native";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import PropTypes from "prop-types";
import validate from "../../helpers/validationRegister";
import { setUserIdToken } from "../../config/models";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  goToLogin = () => {
    console.log("login");
    this.props.navigation.navigate("Login");
  };

  render() {
    const { register, navigation, error } = this.props;
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
                console.log(values);
                try {
                  const response = await register({ variables: { ...values } });
                  if (response.data.signupUser) {
                    const { id, token } = response.data.signupUser;
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
                  <Text style={styles.labelText}>First Name</Text>
                  <Field
                    name="firstName"
                    render={({ input, meta }) => (
                      <View style={styles.formField}>
                        <View style={styles.formInput}>
                          <TextInput
                            {...input}
                            value={input.value}
                            keyboardType="default"
                            placeholder="First Name"
                            editable={true}
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
                  <Text style={styles.labelText}>Email Address</Text>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <View style={styles.formField}>
                        <View style={styles.formInput}>
                          <TextInput
                            {...input}
                            value={input.value}
                            keyboardType="email-address"
                            placeholder="Email Address"
                            autoCapitalize="none"
                            editable={true}
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
                            placeholder="password"
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
                  {error && error.message && error.graphQLErrors[0] && (
                    <Text style={styles.errorMsg}>
                      {error.graphQLErrors[0].message}
                    </Text>
                  )}
                  <Text style={styles.text}>
                    Already have an account?{" "}
                    <Text style={styles.link} onPress={this.goToLogin}>
                      Login
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.button1}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.btnFont}> Register </Text>
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

Register.proptypes = {
  navigation: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
};

export default Register;
