import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import { Marker } from "react-native-maps";

// import mapPin from "../../assets/images/map_pin.png";

const MapViewComponent = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      //   region={{
      //     latitude: 49.263419,
      //     longitude: -123.138192,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421
      //   }}
    >
      {/* <Marker
        coordinate={{ latitude: 49.263419, longitude: -123.138192 }}
        title={"Red Academy"}
        image={mapPin}
        tracksViewChanges={true}
      /> */}
    </MapView>
  );
};

export default MapViewComponent;
