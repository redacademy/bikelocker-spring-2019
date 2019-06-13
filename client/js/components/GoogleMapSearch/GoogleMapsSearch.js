import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = props => {
  return (
    <KeyboardAvoidingView
      style={{
        top: "10%",
        zIndex: 200
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        query={{
          key: "AIzaSyDT98OenVboMDlCOGFHCzMI7l0W5Y7-9VM",
          language: "en",
          types: "(cities)"
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
        currentLocation={false}
      />
    </KeyboardAvoidingView>
  );
};

export default GooglePlacesInput;
