import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles";
import theme from "../../config/globalStyles";

const OnboardingScreens = () => {
  const onboardingScreens = [
    {
      backgroundColor: "#FFF",
      image: (
        <Image source={require("../../assets/images/biglockerlogo.png")} />
      ),
      title: "Welcome to Bike Locker",
      subtitle: (
        <View style={styles.page}>
          <Text>
            Bike Locker is an app that enables cyclists to find safe parking for
            their bicycle in Vancouver. Using the app, users can locate an
            available space, map their route, and rate and review the space
          </Text>
        </View>
      )
    },
    {
      backgroundColor: "#FFF",
      image: (
        <View>
          <Image
            source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
          />
          <Image source={require("../../assets/images/pindiagram.png")} />
        </View>
      ),
      title: "",

      subtitle: (
        <View style={styles.page}>
          <Text style={styles.p}>
            <Text style={styles.bold}>Pins</Text> on the map are locations to
            lock your bike.
          </Text>
          <Text style={styles.p}>
            <Text style={styles.bold}>Pin colours</Text> indicate different risk
            levels in the area.
          </Text>
          <Text style={styles.p}>
            <Text style={styles.bold}>Pin information</Text> is input by fellow
            Bike Lcoker users who want to help their community.
          </Text>
        </View>
      )
    },
    {
      backgroundColor: "#FFF",
      image: (
        <Image
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />
      ),
      title: "Your contributions will help your local cycling community.",
      subtitle: (
        <View style={styles.page}>
          <Text>Bonus:</Text>
          <Text>
            once you've added your first pin, you can head to COMOR and save
            10%!
          </Text>
        </View>
      )
    }
  ];
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onSkip={() => console.log("this will go to the map screen")}
        showSkip={true}
        nextLabel="Next"
        showNext={true}
        controlStatusBar={true}
        showPagination={true}
        bottomBarColor={theme.mediumGreen}
        controlStatusBar={true}
        // transitionAnimationDuration
        pages={onboardingScreens}
      />
    </View>
  );
};

export default OnboardingScreens;
