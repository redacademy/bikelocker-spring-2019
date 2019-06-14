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
          source={require("../../assets/images/profile_pic.jpg")}
        />
      </View>
      <View>
        <Text>
          {user.firstName} {user.lastName}
        </Text>
        <Text>
          {user.city}, {user.province}, {user.country}
        </Text>
        <Text>My bike is a...</Text>
        <Text>
          {user.bikeColor} {user.bikeBrand} {user.bikeType}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
