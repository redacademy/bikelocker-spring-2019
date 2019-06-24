import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

const ThankYouModal = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={this.toggleModal} />
      </View>
    </View>
  );
};
