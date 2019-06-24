import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import styles from "./styles";
import Loader from "../Loader";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withNavigation } from "react-navigation";
import ActionButton from "react-native-action-button";
import theme from "../../config/globalStyles";

class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 49.2827,
      longitude: 123.1207,
      coordinates: {
        latitude: null,
        longitude: null
      },
      slider: false,
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
          if (loading || !data) return <Loader />;
          if (data) {
            return (
              <View style={styles.mapContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.mapView}
                  onLongPress={e => {
                    if (this.state.slider === true) {
                      this.setState({
                        coordinates: {
                          latitude: e.nativeEvent.coordinate.latitude,
                          longitude: e.nativeEvent.coordinate.longitude
                        }
                      }),
                        this.props.navigation.navigate("Profile", {
                          coordinates: {
                            latitude: this.state.coordinates.latitude,
                            longitude: this.state.coordinates.latitude
                          }
                        });
                    }
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
                  showsMyLocationButton={true}
                  showsUserLocation={true}
                >
                  {this.state.coordinates.latitude !== null ||
                  this.state.coordinates.longitude !== null ? (
                    <Marker coordinate={this.state.coordinates} />
                  ) : null}
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

                <ActionButton
                  position="right"
                  offsetX={15}
                  size={60}
                  renderIcon={() => (
                    <IconFontAwesome
                      size={30}
                      color={theme.white}
                      name="plus"
                    />
                  )}
                  buttonColor={theme.mediumGreen}
                  style={styles.actionBtn}
                >
                  <ActionButton.Item
                    buttonColor={theme.mediumGreen}
                    title="Add a locker"
                    onPress={() =>
                      this.setState({ slider: !this.state.slider })
                    }
                  >
                    <IconFontAwesome
                      name="map-marker"
                      size={30}
                      color={theme.white}
                    />
                  </ActionButton.Item>
                </ActionButton>
                <ActionButton
                  offsetX={15}
                  position="right"
                  size={60}
                  renderIcon={() => (
                    <IconFontAwesome
                      size={30}
                      color={theme.white}
                      name="location-arrow"
                    />
                  )}
                  buttonColor={theme.mediumGreen}
                  style={styles.actionBtn2}
                  onPress={() => this.getCurrentLocation()}
                />
              </View>
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
