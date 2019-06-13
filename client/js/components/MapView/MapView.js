import React, { Component } from "react";
import { Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import GooglePlacesInput from "../GoogleMapSearch";

class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: undefined,
      longitude: undefined,
      error: null
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  changeRegion = position => {
    this.setState({
      latitude: position.nativeEvent.coordinate.latitude,
      longitude: position.nativeEvent.coordinate.longitude
    });
  };

  render() {
    const { latitude, longitude } = this.state;
    return latitude !== undefined && longitude !== undefined ? (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        maxZoomLevel={20}
        showsBuildings={true}
        showsCompass={true}
        showsUserLocation={true}
        followsUserLocation={true}
        onUserLocationChange={this.changeRegion}
      >
        {/* <Marker
          coordinate={{ latitude: 49.263419, longitude: -123.138192 }}
          title={"Red Academy"}
          // image={mapPin}
          tracksViewChanges={true}
        /> */}
      </MapView>
    ) : (
      <Text>Please wait</Text>
    );
  }
}

export default MapViewComponent;
