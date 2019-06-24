import React, { Component } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  View
} from "react-native";
import { Field, Form, FormSpy } from "react-final-form";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styles from "./styles";

class EditProfileAbout extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: false,
      done: false
    };
  }

  handleSelectFile = event => {
    this.setState({
      fileSelected: this.fileInput.current.files[0]
    });
  };

  getBase64Url() {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        resolve(
          `data:${this.state.fileSelected.type};base64, ${btoa(
            e.target.result
          )}`
        );
      };
      reader.readAsBinaryString(this.state.fileSelected);
    });
  }

  resetFileInput = () => {
    this.fileInput.current.value = "";
    this.props.resetImage();
    this.setState({
      fileSelected: false
    });
  };

  // dispatchUpdate(values, updateItem) {
  //   if (!values.imageurl && this.state.fileSelected) {
  //     this.getBase64Url().then(imageurl => {
  //       updateItem({
  //         imageurl
  //       });
  //     });
  //   }
  //   updateItem({
  //     ...values
  //   });
  // }

  triggerInputFile = () => this.fileInput.current.click();
  saveItem = async (values, addItem) => {
    try {
      const newItem = { ...values };
      await addItem({ variables: { item: newItem } });
    } catch (e) {
      throw Error(e);
    }
  };

  render() {
    const { user } = this.props;

    return (
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
                          keyboardType="email-address"
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
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
                  <Text style={styles.btnFont}> Register </Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
              </View>
            )}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

export default EditProfileAbout;

const UPADTE_USER = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $age: Int
    $bikeType: String
    $bikeBrand: String
    $bikeColor: String
    $addressOne: String
    $addressTwo: String
    $city: String
    $province: String
    $country: String
    $postalCode: String
    $email: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      age: $age
      bikeType: $bikeType
      bikeBrand: $bikeBrand
      bikeColor: $bikeColor
      addressOne: $addressOne
      addressTwo: $addressTwo
      city: $city
      province: $province
      country: $country
      postalCode: $postalCode
      email: $email
    ) {
      id
      firstName
      lastName
      age
      bikeType
      bikeBrand
      bikeColor
      addressOne
      addressTwo
      city
      province
      country
      postalCode
      email
    }
  }
`;
