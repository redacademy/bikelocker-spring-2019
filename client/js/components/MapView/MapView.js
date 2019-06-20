import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./styles";
import Loader from "../Loader";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withNavigation } from "react-navigation";

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

  componentDidUpdate(prevProps) {
    navigator.geolocation.clearWatch(this.watchID);
    navigator.geolocation.stopObserving();
    if (this.props.searchedLocation !== prevProps.searchedLocation) {
      this.setState({
        latitude: this.props.searchedLocation.lat,
        longitude: this.props.searchedLocation.lng
      });
    }
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <Query query={GET_LOCATION}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (data) {
            return (
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
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
                  style={styles.locator}
                  onPress={() => this.getCurrentLocation()}
                >
                  <IconFontAwesome
                    name="location-arrow"
                    size={30}
                    color="#FFF"
                    style={{ textAlign: "center" }}
                  />
                </TouchableOpacity>
                {data.allLockers.map(d => (
                  <Marker
                    key={d.id}
                    coordinate={{
                      latitude: d.latitude,
                      longitude: d.longitude
                    }}
                    onPress={() =>
                      this.props.navigation.push("Locker", {
                        locationID: d.id,
                        userLat: this.state.latitude,
                        userLng: this.state.longitude
                      })
                    }
                    title={d.address}
                  />
                ))}
              </MapView>
            );
          }
        }}
      </Query>
    );
  }
}

export default withNavigation(MapViewComponent);

const GET_LOCATION = gql`
  query {
    allLockers {
      id
      address
      latitude
      longitude
      reviews {
        rating
      }
    }
  }
`;
