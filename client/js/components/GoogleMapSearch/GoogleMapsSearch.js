import React from "react";
import { KeyboardAvoidingView, TextInput, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

const GooglePlacesInput = props => {
  return (
    <View
      style={{
        // height: "10%",
        // top: "10%"
        position: "absolute",
        width: "100%",
        top: 50,
        zIndex: 1
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        minLength={2}
        autoFocus={false}
        returnKeyType={"search"}
        keyboardAppearance={"light"}
        listViewDisplayed="auto"
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={(data, details = null) => {
          console.log(details);
        }}
        getDefaultValue={() => ""}
        query={{
          key: "AIzaSyDT98OenVboMDlCOGFHCzMI7l0W5Y7-9VM",
          language: "en"
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: "#5d5d5d",
            fontSize: 16
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
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
};

export default GooglePlacesInput;
