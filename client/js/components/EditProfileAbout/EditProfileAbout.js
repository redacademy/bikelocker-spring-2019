import React, { Component } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  View
} from "react-native";
import { Field, Form } from "react-final-form";
import gql from "graphql-tag";
import styles from "./styles";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import Loader from "../Loader";

class EditProfileAbout extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      fileSelected: false,
      done: false,
      ageRange: []
    };
  }

  componentDidMount() {
    const ageRange = [];
    for (let i = 15; i <= 75; i++) {
      ageRange.push(i);
    }
    this.setState({ ageRange });
  }

  render() {
    const { user, navigation } = this.props;
    user.age && (user.age = user.age.toString());

    return (
      <Mutation mutation={UPDATE_USER}>
        {(updateUser, { loading, data, error }) => {
          if (loading) return <Loader />;
          return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ScrollView contentContainerStyle={styles.container}>
                <Image
                  borderRadius={75}
                  resizeMode="contain"
                  style={styles.profilePic}
                  source={require("../../assets/images/profile_pic.jpg")}
                />
                <Text style={styles.labelText}>Change photo</Text>
                <Form
                  initialValues={user}
                  onSubmit={async values => {
                    try {
                      const variables = { ...values };
                      variables.age = variables.age
                        ? parseInt(variables.age)
                        : undefined;
                      variables.phone = variables.phone
                        ? parseInt(variables.phone)
                        : undefined;
                      await updateUser({ variables });
                      this.props.navigation.navigate("Profile");
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                  render={({ handleSubmit, pristine, invalid, values }) => (
                    <View style={styles.form}>
                      <Text style={styles.labelText}>First Name *</Text>
                      <Field
                        name="firstName"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="default"
                                placeholder={"Enter your first name..."}
                                editable={true}
                                style={styles.textInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <Text style={styles.labelText}>Last Name *</Text>
                      <Field
                        name="lastName"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="default"
                                placeholder={"Enter your last name..."}
                                editable={true}
                                style={styles.textInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <Text style={styles.labelText}>Age</Text>
                      <Field
                        name="age"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="default"
                                placeholder={"30"}
                                editable={true}
                                style={styles.ageInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <Text style={styles.labelText}>Bike Type</Text>
                      <Field
                        name="bikeType"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="email-address"
                                placeholder={"Enter your bike type..."}
                                editable={true}
                                style={styles.textInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <Text style={styles.labelText}>Bike Brand</Text>
                      <Field
                        name="bikeBrand"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="email-address"
                                placeholder={"Enter your bike brand..."}
                                editable={true}
                                style={styles.textInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <Text style={styles.labelText}>Bike Colour</Text>
                      <Field
                        name="bikeColor"
                        render={({ input, meta }) => (
                          <View style={styles.formField}>
                            <View style={styles.formInput}>
                              <TextInput
                                {...input}
                                keyboardType="email-address"
                                placeholder={"Enter your bike colour..."}
                                editable={true}
                                style={styles.textInput}
                              />
                            </View>
                            <View>
                              {meta.error && meta.touched && (
                                <Text style={styles.errorMsg}>
                                  {meta.error}
                                </Text>
                              )}
                            </View>
                          </View>
                        )}
                      />
                      <View style={styles.buttons}>
                        <TouchableOpacity
                          style={styles.backButton}
                          onPress={() => navigation.navigate("Profile")}
                        >
                          <Text style={styles.backButtonLabel}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.submitButton}
                          onPress={handleSubmit}
                        >
                          <Text style={styles.submitButtonLabel}>Submit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </ScrollView>
            </TouchableWithoutFeedback>
          );
        }}
      </Mutation>
    );
  }
}

export default EditProfileAbout;

EditProfileAbout.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object
};

const UPDATE_USER = gql`
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
