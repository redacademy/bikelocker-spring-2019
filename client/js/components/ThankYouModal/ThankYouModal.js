import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

const ThankYouModal = ({ toggleModal, state }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={state.isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ThankYouModal;
