import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
      <View style={styles.container}>
        <Mutation
          refetchQueries={() => [
            { query: ALL_ITEMS_QUERY, variables: { id: viewer.id } }
          ]}
          mutation={UPADTE_USER}
        >
          {(addItem, { data }) => (
            <Form
              onSubmit={values => {
                this.saveItem(values, addItem);
              }}
              render={({ handleSubmit, pristine, invalid, form, values }) => {
                return (
                  <form
                    onSubmit={values => {
                      handleSubmit(values);
                      form.reset();
                      this.props.resetItem();
                    }}
                    className={styles.formContainer}
                  >
                    {/* <FormSpy
                    subscription={{ values: true }}
                    component={({ values }) => {
                      if (values) {
                        this.dispatchUpdate(values, updateItem);
                      }
                      return "";
                    }}
                  /> */}
                    {this.state.fileSelected ? (
                      <TouchableOpacity
                        onClick={this.resetFileInput}
                        className={styles.resetTouchableOpacity}
                      >
                        <Text>Change photo</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onClick={this.triggerInputFile}
                        variant="contained"
                        className={styles.TouchableOpacity}
                      >
                        <Text>Add photo</Text>
                      </TouchableOpacity>
                    )}
                    {/* <input
                    hidden
                    ref={this.fileInput}
                    onChange={e => this.handleSelectFile(e)}
                    type="file"
                    name="imageSelect"
                    id="imageSelect"
                  /> */}
                    <TouchableOpacity
                      type="submit"
                      variant="contained"
                      size="large"
                      color="primary"
                      className={styles.share}
                    >
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </form>
                );
              }}
            />
          )}
        </Mutation>

        <Image
          borderRadius={75}
          resizeMode="contain"
          style={styles.profilePic}
          source={require("../../assets/images/profile_pic.jpg")} // replace by profile pic once upload mutation is working
        />
        <View style={styles.info}>
          <Text style={styles.userName}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.userLocation}>
            {user.city}, {user.province}, {user.country}
          </Text>
          <Text style={styles.caption}>
            {user.bikeColor} {user.bikeBrand} {user.bikeType}
          </Text>
        </View>
      </View>
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
