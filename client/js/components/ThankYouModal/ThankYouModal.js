import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import PropTypes from "prop-types";

const ThankYouModal = ({ toggleModal, state }) => {
  return (
    <View style={styles.container}>
      <Modal isVisible={state.isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.thankYou}>Thank you!</Text>
          <Text style={styles.modalText}>
            You’re helping to reduce bike theft in your city and making the
            Biking Community better!
          </Text>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.continueContainer}
          >
            <Text style={styles.continue}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ThankYouModal;

ThankYouModal.propTypes = {
  toggleModal: PropTypes.func,
  state: PropTypes.object
};
