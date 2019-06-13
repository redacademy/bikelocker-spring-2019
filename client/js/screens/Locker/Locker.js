import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform
} from "react-native";
import styles from "./styles";
import PhotoCarousel from "../../components/PhotoCarousel";
import getDirections from "react-native-google-maps-directions";
// import { OpenMapDirections } from "react-native-navigation-directions";
import { Gravatar, GravatarApi } from "react-native-gravatar";

class Locker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // _callShowDirections = () => {
  //   const startPoint = {
  //     latitude: 49.2633479,
  //     longitude: -123.1403165
  //   };

  //   const endPoint = {
  //     latitude: 49.2627139,
  //     longitude: -123.1548911
  //   };

  //   const transportPlan = "w";

  //   OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
  //     console.log(res);
  //   });
  // };

  // handleGetDirections = () => {
  //   const data = {
  //     source: {
  //       latitude: 49.2633479,
  //       longitude: -123.1403165
  //     },
  //     destination: {
  //       latitude: 49.2627139,
  //       longitude: -123.1548911
  //     },
  //     params: [
  //       {
  //         key: "travelmode",
  //         value: "bicycling" // may be "walking", "bicycling" or "transit" as well
  //       },
  //       {
  //         key: "dir_action",
  //         value: "navigate" // this instantly initializes navigation using the given travel mode
  //       }
  //     ]
  //     // waypoints: [
  //     //   {
  //     //     latitude: -33.8600025,
  //     //     longitude: 18.697452
  //     //   },
  //     //   {
  //     //     latitude: -33.8600026,
  //     //     longitude: 18.697453
  //     //   },
  //     //   {
  //     //     latitude: -33.8600036,
  //     //     longitude: 18.697493
  //     //   },
  //     //   {
  //     //     latitude: -33.8600046,
  //     //     longitude: 18.69743
  //     //   }
  //     // ]
  //   };

  //   getDirections(data);
  // };

  render() {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q="
    });
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
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/chevrons/down.svg")} />
        </TouchableOpacity>
        <PhotoCarousel />

        <View style={styles.infoContainer}>
          <Text> 1100 Pender Street</Text>
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
              // onPress={this.handleGetDirections}
              // onPress={() => {
              //   this._callShowDirections();
              // }}
              onPress={() => Linking.openURL(url)}
            >
              <Image
                style={styles.icon}
                source={require("../../assets/icons/directions.png")}
              />
              <Text style={styles.btnFont2}>Directions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reviewer}>
            <Gravatar
              options={{
                email: "nancy.q.chu@gmail.com",
                parameters: { size: "200", d: "mm" },
                secure: true
              }}
              style={styles.roundedProfileImage}
            />
            <View style={styles.review}>
              <Text>Username</Text>
              <Text>Time</Text>
              <Text>Review</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Locker;
