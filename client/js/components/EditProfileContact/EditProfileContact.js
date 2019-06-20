import React from "react";
import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";
import styles from "./styles";

const Profile = ({ user, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contact</Text>
      </View>

      <View style={styles.info}>
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
