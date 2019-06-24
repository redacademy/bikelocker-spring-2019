import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import theme from "../../config/globalStyles";
import Modal from "react-native-modal";
import styles from "./styles";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      isModalVisible: false
    };
  }

  toggleModal = () => {
    if (this.state.isModalVisible === false) {
      this.setState({ isModalVisible: true });
    } else if (this.state.isModalVisible === true) {
      this.setState({ isModalVisible: false });
    }
  };
  render() {
    const { isModalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Contact Us</Text>
        <Text style={styles.p}>
          We'd love to hear from you! Thoughts, comments, feedback.
        </Text>
        <Text style={styles.comment}>Comment</Text>
        <TextInput
          {...this.props}
          autoCapitalize={"sentences"}
          autoCorrect={true}
          maxLength={200}
          placeholder={"Leave your comment here..."}
          placeholderTextColor={"black"}
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          multiline={true}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log(isModalVisible);
            this.setState({ isModalVisible: !isModalVisible });
          }}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        {isModalVisible === true ? (
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.thanks}>Thank you!</Text>
              <Text style={styles.subHeading}>Thanks for the feedback!</Text>
              <TouchableOpacity style={styles.btn2} onPress={this.toggleModal}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }
}

export default Contact;
