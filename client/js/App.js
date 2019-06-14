import React, { Component } from "react";
import { GooglePlaceProvider } from "./context/GooglePlaceContext";
import FindSpotContainer from "./screens/FindSpot";

export default class App extends Component {
  render() {
    return (
      <GooglePlaceProvider>
        <FindSpotContainer />
      </GooglePlaceProvider>
    );
  }
}
