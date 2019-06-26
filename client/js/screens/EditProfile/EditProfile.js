import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import EditProfileAbout from "../../components/EditProfileAbout";
import EditProfileContact from "../../components/EditProfileContact";
import styles from "./styles";
import PropTypes from "prop-types";

const EditProfile = ({ toggleTab, secondTabActive, user, navigation }) => (
  <ScrollView>
    <View style={styles.header}>
      <Text style={styles.title}>Profile</Text>
    </View>
    <View style={styles.tabs}>
      <TouchableOpacity
        onPress={toggleTab}
        disabled={!secondTabActive}
        style={!secondTabActive ? styles.activeTab : styles.inactiveTab}
      >
        <Text
          style={
            !secondTabActive ? styles.activeTabLabel : styles.inactiveTabLabel
          }
        >
          About Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleTab}
        disabled={secondTabActive}
        style={secondTabActive ? styles.activeTab : styles.inactiveTab}
      >
        <Text
          style={
            secondTabActive ? styles.activeTabLabel : styles.inactiveTabLabel
          }
        >
          Contact Info
        </Text>
      </TouchableOpacity>
    </View>
    {!secondTabActive ? (
      <EditProfileAbout user={user} navigation={navigation} />
    ) : (
      <EditProfileContact user={user} navigation={navigation} />
    )}
  </ScrollView>
);

export default EditProfile;

EditProfile.propTypes = {
  toggleTab: PropTypes.func,
  secondTabActive: PropTypes.bool,
  user: PropTypes.object,
  navigation: PropTypes.object
};
