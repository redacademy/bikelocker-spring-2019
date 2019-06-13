import React, { Component } from "react";
import MapViewComponent from "../../components/MapView";
import { Text, Platform, View } from "react-native";
import GoogleMapsSearch from "../../components/GoogleMapSearch";
import styles from "./styles";

class FindSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: undefined,
      longitude: undefined
    };
  }

  // locationData(details) {
  //   this.setState({
  //     latitude: details.geometry.location.lat,
  //     longitude: details.geometry.location.lng
  //   });
  // }

  render() {
    console.log(this.state.latitude);
    return (
      <View style={styles.map}>
        <GoogleMapsSearch />
        <MapViewComponent />
      </View>
    );
  }
}

export default FindSpot;
