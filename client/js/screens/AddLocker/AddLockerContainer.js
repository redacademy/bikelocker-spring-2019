import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddLocker from "./AddLocker";

export default class AddLockerContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddLocker />
      </View>
    );
  }
}


