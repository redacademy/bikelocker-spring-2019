import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 49.2827,
      longitude: 123.1207,
      error: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null
      });
    });
  }

  getCurrentLocation = () => {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => console.log(error),
      {}
    );
  };

  componentDidUpdate = () => {
    navigator.geolocation.clearWatch(this.watchID);
    navigator.geolocation.stopObserving();
  };

  changeRegion = position => {
    const { isRegionChanged } = this.state;
    if (!isRegionChanged) {
      console.log("Second", position.nativeEvent);
      this.setState({
        latitude: position.nativeEvent.coordinate.latitude,
        longitude: position.nativeEvent.coordinate.longitude,
        isRegionChanged: false
      });
    } else {
    }
  };

  onRegionChanges = region => {
    if (this.state.isStart === 0) {
      this.setState({ isStart: 1 });
    } else {
      _mapView.animateToRegion(
        {
          latitude: region.latitude,
          longitude: region.longitude
        },
        1000
      );
      this.setState({
        isRegionChanged: true,
        latitude: region.latitude,
        longitude: region.longitude
      });
      console.log("Changed", region);
    }
  };

  render() {
    const { latitude, longitude } = this.state;

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        initialRegion={{
          latitude: 49.2827,
          longitude: 123.1207,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        maxZoomLevel={20}
        showsBuildings={true}
        showsCompass={true}
        showsUserLocation={true}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 20,
            height: 20,
            top: 100,
            left: 30
          }}
          onPress={() => this.getCurrentLocation()}
        />
      </MapView>
    );
  }
}

export default MapViewComponent;
