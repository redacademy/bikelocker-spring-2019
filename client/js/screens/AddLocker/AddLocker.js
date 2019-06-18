import React, { Component } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput
} from "react-native";
import LockerRating from "../../components/LockerRating";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-picker";
import { Form, Field } from "react-final-form";
export default class AddLocker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewRating: null
    };
  }

  handleChoosePhoto = () => {
    const options = {
      title: "Select or Take A Picture"
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("response: ", response);
    });
  };

  handleReviewRating = rating => {
    console.log("rating:", rating);
    this.setState({ reviewRating: rating }, () =>
      console.log("STATE: ", this.state)
    );
  };

  handleInput = () => {
    console.log("something submitted");
  };

  render() {
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.photoContainer}
          onPress={this.handleChoosePhoto}
        >
          <Icon name="ios-camera" style={styles.cameraIcon} />
          <Text style={styles.cameraText}>Take a photo of the spot.</Text>
          <Text style={styles.cameraText}>
            Show others what this spot looks like.
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.address}>1100 Block Cambie St.</Text>
          <Text style={styles.ratingText}>Rate the security of this rack</Text>
          <LockerRating handleReviewRating={this.handleReviewRating} />
          <View style={styles.lockerDesc}>
            <Text style={styles.secureText}>Less secure</Text>
            <Text style={styles.secureText}>More secure</Text>
          </View>
          <Text style={styles.commentText}>Leave a comment</Text>

          <Form
            onSubmit={this.handleInput}
            render={({ handleSubmit, pristine, invalid }) => (
              <View>
                <Field
                  name="bio"
                  render={({ input, meta }) => (
                    <View style={styles.form}>
                      <TextInput
                        onSubmit={handleSubmit}
                        editable={true}
                        maxLength={40}
                      />
                    </View>
                  )}
                />
              </View>
            )}
          />

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.backSpacing}>
              <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleSubmit}
              style={styles.submitSpacing}
            >
              <Text style={styles.submit}> Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
