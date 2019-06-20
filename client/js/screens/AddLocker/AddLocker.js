import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import LockerRating from "../../components/LockerRating";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";
import { Form, Field } from "react-final-form";
import WideAddPhoto from "../../components/WideAddPhoto";
import HalfAddPhoto from "../../components/HalfAddPhoto";
export default class AddLocker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewRating: null,
      photo1Type: null,
      photo1: null,
      photo2Type: null,
      photo2: null
    };
  }

  handleChoosePhoto1 = () => {
    const options = {
      title: "Select or Take A Picture"
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log("PHOTO response: ", response);
      this.setState({ photo1Type: response.type, photo1: response.data });
    });
  };
  handleChoosePhoto2 = () => {
    const options = {
      title: "Select or Take A Picture"
    };
    ImagePicker.showImagePicker(options, response => {
      this.setState({ photo2Type: response.type, photo2: response.data });
      console.log("PHOTO2 STATE: ", this.state);
    });
  };

  handleReviewRating = rating => {
    console.log("rating:", rating);
    this.setState({ reviewRating: rating }, () =>
      console.log("RATING STATE: ", this.state)
    );
  };

  handleInput = () => {
    console.log("something submitted");
  };

  render() {
    return (
      <ScrollView style={styles.allContainer}>
        {this.state.photo2 !== null ? (
          <View style={styles.addPhotos}>
            <Image
              source={{
                uri: `data:${this.state.photo1Type};base64,${this.state.photo1}`
              }}
              style={{
                height: Dimensions.get("window").height * 0.2,
                width: Dimensions.get("window").width * 0.49
              }}
            />
            <Image
              source={{
                uri: `data:${this.state.photo2Type};base64,${this.state.photo2}`
              }}
              style={{
                height: Dimensions.get("window").height * 0.2,
                width: Dimensions.get("window").width * 0.49
              }}
            />
          </View>
        ) : this.state.photo1 !== null ? (
          <View style={styles.addPhotos}>
            <Image
              source={{
                uri: `data:${this.state.photo1Type};base64,${this.state.photo1}`
              }}
              style={{
                height: Dimensions.get("window").height * 0.2,
                width: Dimensions.get("window").width * 0.45,
                padding: 5
              }}
            />
            <HalfAddPhoto handleChoosePhoto={this.handleChoosePhoto2} />
          </View>
        ) : (
          <WideAddPhoto handleChoosePhoto={this.handleChoosePhoto1} />
        )}
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
                    <TextInput
                      style={styles.form}
                      onSubmit={handleSubmit}
                      editable={true}
                      maxLength={40}
                      multiline={true}
                    />
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
              <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
