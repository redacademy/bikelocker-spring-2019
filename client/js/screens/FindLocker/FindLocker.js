import React from "react";
import MapViewComponent from "../../components/MapView";
import { View } from "react-native";
import GoogleMapsSearch from "../../components/GoogleMapSearch";
import GooglePlaceContext from "../../context/GooglePlaceContext";

const FindLocker = () => {
  return (
    <GooglePlaceContext.Consumer>
      {({ location, updateLocation }) => (
        <View>
          <GoogleMapsSearch updateContextLocation={updateLocation} />
          <MapViewComponent searchedLocation={location} />
        </View>
      )}
    </GooglePlaceContext.Consumer>
  );
};

export default FindLocker;
