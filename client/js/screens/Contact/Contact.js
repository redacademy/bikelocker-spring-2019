import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

const Contact = ({ params }) => (
  <View>
    <Text>Contact Us</Text>
    <Text>We'd love to hear from you! Thoughts, comments, feedback.</Text>
    <TextInput
      autoCapitalize
      autoCompleteType
      autoCorrect
      {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable={true}
      maxLength={40}
      placeholder={"Leave your comment here..."}
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      // onChangeText={text => this.setState({ text })}
      // value={this.state.text}
    />
    <TouchableOpacity>
      <Text>Submit</Text>
    </TouchableOpacity>
  </View>
);

export default Contact;
