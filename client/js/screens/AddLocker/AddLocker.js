import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import LockerRating from '../../components/LockerRating';
import styles from './styles';
import { Form, Field } from 'react-final-form';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const renderAddImage = (saveImage, updateFilesToUpload) => (
  <TouchableOpacity
    style={styles.photoContainer}
    onPress={() => saveImage(updateFilesToUpload)}
  >
    <Icon name="ios-camera" color="#fff" size={35} />
    <Text style={styles.cameraText}>Take a photo</Text>
  </TouchableOpacity>
);

const saveImage = updateFilesToUpload => {
  const options = {
    title: 'Pick Bike Locker Image',
  };

  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      updateFilesToUpload(response.uri);
    }
  });
};

const AddLocker = ({ state, updateFilesToUpload }) => {
  return (
    <ScrollView>
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
        <Text style={styles.address}>1100 Block Cambie St.</Text>
        <Text style={styles.ratingText}>Rate the security of this rack</Text>
        <LockerRating handleReviewRating={this.handleReviewRating} />
        <View style={styles.lockerDesc}>
          <Text style={styles.secureText}>Less secure</Text>
          <Text style={styles.secureText}>More secure</Text>
        </View>
        <Text style={styles.commentText}>Leave a comment</Text>

        <Form
          onSubmit={() => {}}
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
};

export default AddLocker;
