import React from "react";
import styles from "./style";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HalfAddPhoto = ({ handleChoosePhoto }) => {
  return (
    <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
      <Icon name="ios-camera" style={styles.cameraIcon} />
      <Text style={styles.cameraText}>Add a photo</Text>
    </TouchableOpacity>
  );
};

export default HalfAddPhoto;
