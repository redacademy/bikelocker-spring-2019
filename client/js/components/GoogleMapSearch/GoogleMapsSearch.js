import React, { Component } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import globalStyles from "../../config/globalStyles";
import { API_KEY } from "react-native-dotenv";

const GooglePlacesInput = ({ updateContextLocation }) => {
  return (
    <View style={styles.container}>
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
          updateContextLocation(details.geometry.location);
        }}
        getDefaultValue={() => ""}
        query={{
          key: API_KEY,
          language: "en"
        }}
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
};

export default GooglePlacesInput;
