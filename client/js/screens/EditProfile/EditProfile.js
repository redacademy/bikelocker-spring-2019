import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import EditProfileAbout from "../../components/EditProfileAbout";
import EditProfileContact from "../../components/EditProfileContact";

const EditProfile = ({ toggleTab, switchTab, user }) => (
  <ScrollView>
    <Text>Profile</Text>
    <View>
      <TouchableOpacity onPress={toggleTab} disabled={!switchTab}>
        <Text>About Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleTab} disabled={switchTab}>
        <Text>Contact Info</Text>
      </TouchableOpacity>
    </View>
    {!switchTab ? (
      <EditProfileAbout user={user} />
    ) : (
      <EditProfileContact user={user} />
    )}
  </ScrollView>
);

export default EditProfile;
