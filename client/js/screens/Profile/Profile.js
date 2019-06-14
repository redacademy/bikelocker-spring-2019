import React from "react";
import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";

const Profile = ({ user }) => {
  console.log("user", user);
  return (
    <ScrollView>
      <View>
        <Text>My Profile</Text>
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{ width: 200, height: 200, borderRadius: 100 }}
          source={{ uri: user.profilePhoto }}
        />
      </View>
      <View>
        <Text>
          {user.firstName} {user.lastName}
        </Text>
        <Text>City</Text>
        <Text>My bike is a...</Text>
        <Text>Make and model of the bike</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
