import React, { Component } from "react";
import { Platform } from "react-native";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { GooglePlaceProvider } from "./context/GooglePlaceContext";
import { ApolloProvider } from "react-apollo";
import SplashScreen from "react-native-splash-screen";
import client from "./config/api";

export default class App extends Component {
  componentDidMount() {
    Platform.select({
      ios: SplashScreen.hide()
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <GooglePlaceProvider>
          <RootStackNavigator />
        </GooglePlaceProvider>
      </ApolloProvider>
    );
  }
}
