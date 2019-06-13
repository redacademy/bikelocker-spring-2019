import React, { Component } from "react";
import MapViewComponent from "../../components/MapView";
import { Text, Platform, View } from "react-native";
import GoogleMapsSearch from "../../components/GoogleMapSearch";
import styles from "./styles";

class FindSpot extends Component {
  render() {
    return (
      <View>
        <GoogleMapsSearch />
        <MapViewComponent />
      </View>
    );
  }
}

export default FindSpot;
