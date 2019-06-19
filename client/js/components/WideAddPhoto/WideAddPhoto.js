import React from "react";
import styles from "./style";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const WideAddPhoto = ({ handleChoosePhoto }) => {
  return (
    <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
      <Icon name="ios-camera" style={styles.cameraIcon} />
      <Text style={styles.cameraText}>Take a photo of the spot.</Text>
      <Text style={styles.cameraText}>
        Show others what this spot looks like.
      </Text>
    </TouchableOpacity>
  );
};

export default WideAddPhoto;
