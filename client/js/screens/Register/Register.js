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
import { setUserIdToken } from "../../config/models";

class Register extends Component {
  handleSubmit = () => {
    console.log("something submitted");
  };
  render() {
    const { register, navigation } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />

        <Form
          onSubmit={async values => {
            console.log(values);
            try {
              const response = await register({ variables: { ...values } });
              if (response.data.register) {
                const { id, token } = response.data.register;
                await setUserIdToken(id, token);
                navigation.navigate("FindLocker");
              }
            } catch (e) {
              throw e;
            }
          }}
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
                        keyboardType="default"
                        placeholder="Email Address"
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
                        placeholder="Password"
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
              <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
                <Text style={styles.btnFont}> Register </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Register;
