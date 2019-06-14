import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  ScrollView
} from "react-native";
import styles from "./styles";
import PhotoCarousel from "../../components/PhotoCarousel";
// import getDirections from "react-native-google-maps-directions";
// import { OpenMapDirections } from "react-native-navigation-directions";
import { Gravatar, GravatarApi } from "react-native-gravatar";

class Locker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { lockerinfo } = this.props;

    const srcLatitude = 49.2633479;
    const srcLongitude = -123.140316;
    const destLatitude = lockerinfo.latitude;
    const destLongitude = lockerinfo.longitude;
    const srcLatLng = `${srcLatitude},${srcLongitude}`;
    const destLatLng = `${destLatitude},${destLongitude}`;
    const label = "Custom Label";

    const url = Platform.select({
      ios: `http://maps.apple.com/?saddr=${srcLatLng}&daddr=${destLatLng}&dirflg=d`,
      android: `google.navigation:q=${destLatLng}&mode=b`
    });

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/chevrons/down.svg")} />
        </TouchableOpacity>
        <PhotoCarousel />

        <View style={styles.infoContainer}>
          <Text style={styles.address}>{lockerinfo.address}</Text>
          <View style={styles.twoBtns}>
            <TouchableOpacity style={styles.button1}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/review.png")}
              />
              <Text style={styles.btnFont1}>Review</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => Linking.openURL(url)}
            >
              <Image
                style={styles.icon}
                source={require("../../assets/icons/directions.png")}
              />
              <Text style={styles.btnFont2}>Directions</Text>
            </TouchableOpacity>
          </View>

          {lockerinfo.reviews.map((entry, index) => {
            return (
              <View key={index} style={styles.reviewer}>
                <Gravatar
                  options={{
                    email: entry.reviewer.email,
                    parameters: { size: "200", d: "mm" },
                    secure: true
                  }}
                  style={styles.roundedProfileImage}
                />
                <View style={styles.review}>
                  {/* implement handling if they didn't fill first and lastname */}
                  <Text style={styles.acctName}>
                    {entry.reviewer.firstName} {entry.reviewer.lastName}
                  </Text>
                  <Text style={styles.time}>{entry.createdAt}</Text>
                  <Text style={styles.review}>{entry.review}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Locker;
