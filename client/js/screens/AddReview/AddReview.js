import React from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import LockerRating from "../../components/LockerRating";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ThankYouModal from "../../components/ThankYouModal";
import Loader from "../../components/Loader";
import { getUserId } from "../../config/models";

const renderAddImage = (saveImage, updateFilesToUpload) => (
  <TouchableOpacity
    style={styles.photoContainer}
    onPress={() => saveImage(updateFilesToUpload)}
  >
    <Icon name="ios-camera" style={styles.cameraIcon} />
    <Text style={styles.cameraText}>Take a photo</Text>
  </TouchableOpacity>
);

const saveImage = updateFilesToUpload => {
  const options = {
    title: "Pick Bike Locker Image"
  };

  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      return response.didCancel;
    } else if (response.error) {
      return response.error;
    } else {
      updateFilesToUpload(response.uri);
    }
  });
};

const AddReview = ({
  state,
  updateFilesToUpload,
  handleReviewRating,
  navigation,
  toggleModal,
  lockerId,
  street
}) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" enabled>
        {state.filesToUpload.length === 0 &&
          renderAddImage(saveImage, updateFilesToUpload)}
        {state.filesToUpload && state.filesToUpload.length === 1 && (
          <View style={styles.previewContainer}>
            <TouchableOpacity onPress={() => saveImage(updateFilesToUpload)} />
            <Image
              style={styles.previewImage}
              source={{ uri: state.filesToUpload[0] }}
            />
            <TouchableOpacity />
            {renderAddImage(saveImage, updateFilesToUpload)}
          </View>
        )}
        {state.filesToUpload && state.filesToUpload.length === 2 && (
          <View style={styles.previewContainer}>
            <TouchableOpacity onPress={() => saveImage(updateFilesToUpload)}>
              <Image
                source={{ uri: state.filesToUpload[0] }}
                style={styles.previewImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveImage(updateFilesToUpload)}>
              <Image
                source={{ uri: state.filesToUpload[1] }}
                style={styles.previewImage}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.address}>{street}</Text>
          <Text style={styles.ratingText}>Rate the security of this rack</Text>
          <LockerRating handleReviewRating={handleReviewRating} />
          <View style={styles.lockerDesc}>
            <Text style={styles.secureText}>Less secure</Text>
            <Text style={styles.secureText}>More secure</Text>
          </View>
          <Text style={styles.commentText}>Leave a comment</Text>

          <Mutation
            mutation={ADD_REVIEW}
            refetchQueries={() => [
              {
                query: gql`
                  query {
                    allLockers {
                      id
                      address
                      latitude
                      longitude
                      reviews {
                        rating
                      }
                    }
                  }
                `
              }
            ]}
          >
            {(createLocker, { loading, data, error }) => {
              if (loading) return <Loader />;
              return (
                <Form
                  onSubmit={async values => {
                    try {
                      values = {
                        lockerId: lockerId,
                        review: values.review,
                        rating: state.reviewRating,
                        reviewerId: await getUserId()
                      };
                      await createLocker({ variables: values });
                      toggleModal();
                    } catch (e) {
                      throw e;
                    }
                  }}
                  render={({ handleSubmit, pristine, invalid }) => (
                    <View>
                      <Field
                        name="review"
                        render={({ input, meta }) => (
                          <TextInput
                            {...input}
                            style={styles.form}
                            editable={true}
                            maxLength={1000}
                            multiline={true}
                          />
                        )}
                      />
                      <View style={styles.buttons}>
                        <TouchableOpacity
                          style={styles.backSpacing}
                          onPress={() => navigation.goBack()}
                        >
                          <Text style={styles.back}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={handleSubmit}
                          style={styles.submitSpacing}
                        >
                          <Text style={styles.submit}>Submit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              );
            }}
          </Mutation>
          <ThankYouModal toggleModal={toggleModal} state={state} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddReview;

AddReview.propTypes = {
  state: PropTypes.object,
  updateFilesToUpload: PropTypes.func,
  handleReviewRating: PropTypes.func,
  navigation: PropTypes.object,
  toggleModal: PropTypes.func
};

const ADD_REVIEW = gql`
  mutation createReview(
    $rating: Int
    $review: String!
    $lockerId: ID
    $reviewerId: ID
  ) {
    createReview(
      rating: $rating
      review: $review
      lockerId: $lockerId
      reviewerId: $reviewerId
    ) {
      rating
      review
      locker {
        id
      }
    }
  }
`;
