import React, { Component } from "react";
import MapViewComponent from "../../components/MapView";
import { View } from "react-native";
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
          <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      )}
    </GooglePlaceContext.Consumer>
  );
};

export default FindLocker;
