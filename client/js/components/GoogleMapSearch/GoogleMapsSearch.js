import React, { Component } from "react";
import { View, Keyboard } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import globalStyles from "../../config/globalStyles";
import { API_KEY } from "react-native-dotenv";

const GooglePlacesInput = ({ updateContextLocation }) => {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          minLength={2}
          onSubmitEditing={Keyboard.dismiss}
          autoFocus={false}
          returnKeyType={"search"}
          keyboardAppearance={"light"}
          listViewDisplayed={this.state}
          fetchDetails={true}
          renderDescription={row => row.description}
          onPress={(data, details = null) => {
            this.props.updateContextLocation(details.geometry.location);
            this.toggleVisibleState();
          }}
          getDefaultValue={() => ""}
          query={{
            key: API_KEY,
            language: "en"
          }}
          onEndEditing={Keyboard.dismiss}
          styles={{
            textInputContainer: {
              backgroundColor: "rgba(0,0,0,0)",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              width: "93%",
              alignSelf: "center"
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: "#5d5d5d",
              fontSize: 16,
              padding: 20,
              borderRadius: 20
            },
            predefinedPlacesDescription: {
              color: "#1faadb"
            },
            listView: {
              backgroundColor: "rgba(0,0,0,0.5)"
            },
            description: {
              color: globalStyles.white,
              fontSize: 16,
              fontWeight: "bold",
              margin: 0
            },
            poweredContainer: {
              display: "none"
            }
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesDetailsQuery={{
            fields: "formatted_address"
          }}
          filterReverseGeocodingByTypes={[
            "locality",
            "administrative_area_level_3"
          ]}
          debounce={200}
        />
      </View>
    );
  }
}

export default GooglePlacesInput;
