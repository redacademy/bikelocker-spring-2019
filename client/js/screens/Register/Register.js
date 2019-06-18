import React, { Component } from "react";
import { ActivityIndicator, StatusBar, View, Text } from "react-native";
import { Form, Field } from "react-final-form";

class Register extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View>
        <Text>Register form</Text>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <h2>Simple Default Input</h2>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  placeholder="First Name"
                />
              </div>

              <h2>An Arbitrary Reusable Input Component</h2>
              <div>
                <label>Interests</label>
                <Field name="interests" component={InterestPicker} />
              </div>

              <h2>Render Function</h2>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <div>
                    <label>Bio</label>
                    <textarea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />

              <h2>Render Function as Children</h2>
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input type="text" {...input} placeholder="Phone" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            </form>
          )}
        />
      </View>
    );
  }
}

export default Register;
