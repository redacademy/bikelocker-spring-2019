import React, { Component } from "react";
import MapViewComponent from "../../components/MapView";
import { View, Text, Button } from "react-native";
import GoogleMapsSearch from "../../components/GoogleMapSearch";
import GooglePlaceContext from "../../context/GooglePlaceContext";
import styles from "./styles";

const FindLocker = () => {
  return (
    <GooglePlaceContext.Consumer>
      {({ location, updateLocation }) => (
        <View style={styles.map}>
          <GoogleMapsSearch updateContextLocation={updateLocation} />
          <MapViewComponent searchedLocation={location} />
        </View>
      )}
    </GooglePlaceContext.Consumer>
  );
};

export default FindLocker;
