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
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={"light"} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
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
            width: "100%"
          },
          description: {
            fontWeight: "bold"
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
