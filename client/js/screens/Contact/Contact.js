import React from "react";
import { Text, View } from "react-native";
import OnboardingContainer from "../Onboarding";
import styles from "./styles";

const Contact = ({ params }) => (
  <View style={styles.container}>
    <OnboardingContainer />
  </View>
);

export default Contact;
