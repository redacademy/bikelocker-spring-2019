import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles";
import PropTypes from "prop-types";

const OnboardingScreens = ({ navigation }) => {
  const onboardingScreens = [
    {
      backgroundColor: "#FFF",
      image: (
        <Image
          style={styles.image}
          source={require("../../assets/images/biglockerlogo.png")}
        />
      ),
      title: "Welcome to Bike Locker",
      subtitle: (
        <View style={styles.page}>
          <Text style={styles.p}>
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
            style={styles.image1}
            source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/images/pinDiagramWithLabel.png")}
          />
        </View>
      ),
      title: "",

      subtitle: (
        <View>
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
          style={styles.image}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />
      ),
      title: "Your contributions will help your local cycling community.",
      subtitle: (
        <View style={styles.page}>
          <Image
            style={{ marginVertical: 20, width: width, resizeMode: "contain" }}
            source={require("../../assets/images/Comorwbackground.png")}
          />
          <Text style={styles.p}>
            <Text style={styles.bold}>Bonus: </Text>
            once you've added your first pin, you can head to COMOR and save
            10%!
          </Text>
        </View>
      )
    }
  ];

  const { width } = Dimensions.get("window");
  return (
    <Onboarding
      containerStyles={{ flex: 1, backgroundColor: "white" }}
      bottomBarHighlight={false}
      showNext={false}
      onDone={() => navigation.navigate("FindLocker", {})}
      onSkip={() => navigation.navigate("FindLocker", {})}
      bottomBarColor="white"
      pages={onboardingScreens}
    />
  );
};

export default OnboardingScreens;

OnboardingScreens.propTypes = {
  navigation: PropTypes.object
};
