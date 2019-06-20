import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Onboarding from "react-native-onboarding-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Onboarding = () => {
  const onboardingScreens = [
    {
      backgroundColor: "#fff",
      title: "Onboarding",
      subtitle: "Done with React Native Onboarding Swiper"
    },
    {
      backgroundColor: "#fe6e58",
      title: "The Title",
      subtitle: "This is the subtitle that sumplements the title."
    },
    {
      backgroundColor: "#999",
      title: "Triangle",
      subtitle: "Beautiful, isn't it?"
    }
  ];
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <TouchableOpacity style={{ backgroundColor: "black" }}>
        <Onboarding
          onSkip={() => console.log("this will go to the map screen")}
          showSkip
          nextLabel
          controlStatusBar
          showPagination
          transitionAnimationDuration
          showNext
          pages={onboardingScreens}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
