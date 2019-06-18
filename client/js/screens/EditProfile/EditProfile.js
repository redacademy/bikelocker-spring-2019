import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

const EditProfile = ({ toggleTab, switchTab }) => (
  <ScrollView>
    <Text>Profile</Text>
    <View>
      <TouchableOpacity onPress={toggleTab} disabled={switchTab}>
        <Text>About Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTab} disabled={switchTab}>
        <Text>Contact Info</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

export default EditProfile;
