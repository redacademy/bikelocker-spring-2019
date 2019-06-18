import React, { Component } from "react";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import { GooglePlaceProvider } from "./context/GooglePlaceContext";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

export default class App extends Component {
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
