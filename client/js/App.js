import React, { Component } from "react";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { GooglePlaceProvider } from "./context/GooglePlaceContext";

export default class App extends Component {
  render() {
    return (
      <GooglePlaceProvider>
        <RootStackNavigator />;
      </GooglePlaceProvider>
    );
  }
}
