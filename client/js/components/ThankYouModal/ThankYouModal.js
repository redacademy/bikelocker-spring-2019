import React, { Component } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

const ThankYouModal = ({ toggleModal, state }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={state.isModalVisible}>
        <View style={styles.container}>
          <Text style={styles.thankYou}>Thank you!</Text>
          <Text style={styles.modalText}>
            You’re helping to reduce bike theft in your city and making the
            Biking Community better!
          </Text>
          <TouchableOpacity onPress={toggleModal} style={styles.continueContainer}>
            <Text style={styles.continue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ThankYouModal;
