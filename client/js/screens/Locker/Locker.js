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
import { Gravatar } from "react-native-gravatar";
import Rating from "../../components/LockerRatingReadOnly";
import moment from "moment";
import { lockerAvgRating } from "../../helpers/avgRating";
import PropTypes from "prop-types";

const ReviewPlaceholder = () => {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderPrompt}>
        To leave a review, click the review button
      </Text>
    </View>
  );
};

class Locker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { lockerinfo, navigation } = this.props;
    const userLat = navigation.getParam("userLat");
    const userLng = navigation.getParam("userLng");
    const srcLatitude = userLat;
    const srcLongitude = userLng;
    const destLatitude = lockerinfo.latitude;
    const destLongitude = lockerinfo.longitude;
    const srcLatLng = `${srcLatitude},${srcLongitude}`;
    const destLatLng = `${destLatitude},${destLongitude}`;

    const url = Platform.select({
      ios: `http://maps.apple.com/?saddr=${srcLatLng}&daddr=${destLatLng}&dirflg=d`,
      android: `google.navigation:q=${destLatLng}&mode=b`
    });

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.topbar}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.arrow}
            source={require("../../assets/icons/chevrons/down.png")}
          />
        </TouchableOpacity>
        <PhotoCarousel />

        <View style={styles.infoContainer}>
          <Text style={styles.address}>{lockerinfo.address}</Text>
          <View style={styles.rating}>
            <Rating avgRating={lockerAvgRating(lockerinfo)} />
          </View>
          <View style={styles.twoBtns}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                navigation.navigate("AddReview", {
                  lockerId: lockerinfo.id
                })
              }
            >
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
          {lockerinfo.reviews.length < 1 ? (
            <View>
              <ReviewPlaceholder />
            </View>
          ) : (
            lockerinfo.reviews.map((entry, index) => {
              return (
                <View key={index} style={styles.reviewBox}>
                  <Gravatar
                    options={{
                      email: entry.reviewer.email,
                      parameters: { size: "200", d: "mm" },
                      secure: true
                    }}
                    style={styles.roundedProfileImage}
                  />
                  <View style={styles.review}>
                    <Text style={styles.acctName}>
                      {entry.reviewer.firstName} {entry.reviewer.lastName}
                    </Text>
                    <Text style={styles.time}>
                      {moment(entry.createdAt)
                        .startOf("day")
                        .fromNow()}
                    </Text>
                    <Text style={styles.review}>{entry.review}</Text>
                  </View>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    );
  }
}

export default Locker;

Locker.propTypes = {
  lockerinfo: PropTypes.object,
  navigation: PropTypes.object
};
