import React from "react";
import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";
import styles from "./styles";

const Profile = ({ user }) => {
  console.log("user", user);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.profilePic}
          source={require("../../assets/images/profile_pic.jpg")}
        />
      </View>
      <View>
        <Text style={styles.userName}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.userLocation}>
          {user.city}, {user.province}, {user.country}
        </Text>
        <Text style={styles.subheading}>My bike is a...</Text>
        <Text style={styles.caption}>
          {user.bikeColor} {user.bikeBrand} {user.bikeType}
        </Text>
      </View>
    </View>
  );
};

export default Profile;
