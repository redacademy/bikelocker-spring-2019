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

    // const scheme = Platform.select({
    //   ios: "maps:0,0?q=",
    //   android: "geo:0,0?q="
    // });
    const srcLatitude = 49.2633479;
    const srcLongitude = -123.140316;
    const destLatitude = 49.2627139;
    const destLongitude = -123.1548911;
    const srcLatLng = `${srcLatitude},${srcLongitude}`;
    const destLatLng = `${destLatitude},${destLongitude}`;
    const label = "Custom Label";
    // const url = Platform.select({
    //   ios: `${scheme}${label}@${latLng}`,
    //   android: `${scheme}${latLng}(${label})`
    // });
    const url = Platform.select({
      // ios: "http://maps.apple.com/?saddr=San+Jose&daddr=San+Francisco&dirflg=r",
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
          <Text>{lockerinfo.address}</Text>
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
                  <Text>
                    {entry.reviewer.firstName} {entry.reviewer.lastName}
                  </Text>
                  <Text>{entry.createdAt}</Text>
                  <Text>{entry.review}</Text>
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
