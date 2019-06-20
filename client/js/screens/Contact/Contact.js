import React from "react";
import { Text, View } from "react-native";
import OnboardingContainer from "../Onboarding";

const Contact = ({ params }) => (
  <View style={{ flex: 1, height: "100%", width: "100%" }}>
    {/* <Text>This is tact Us Screen</Text> */}
    <OnboardingContainer />
  </View>
);

export default Contact;
