import React from "react";
import { View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles";
import theme from "../../config/globalStyles";

const OnboardingScreens = () => {
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
            style={styles.image}
            source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/images/pindiagram.png")}
          />
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
          style={styles.image}
          source={require("../../assets/icons/bikelocker/combinedlogo/horizontal/black.png")}
        />
      ),
      title: "Your contributions will help your local cycling community.",
      subtitle: (
        <View style={styles.page}>
          <Image
            style={{ width: width, resizeMode: "contain" }}
            source={require("../../assets/images/comorimage.png")}
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

  const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
    } else {
      backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor
        }}
      />
    );
  };

  const backgroundColor = isLight => (isLight ? "blue" : "lightblue");
  const color = isLight => backgroundColor(!isLight);

  const Done = ({ isLight, ...props }) => (
    <TouchableOpacity
      title={"Done"}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight)
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight)
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    />
  );

  const Skip = ({ isLight, skipLabel, ...props }) => (
    <TouchableOpacity
      title={"Skip"}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight)
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70
      }}
      textStyle={{ color: color(isLight) }}
      {...props}
    >
      {skipLabel}
    </TouchableOpacity>
  );

  const Next = ({ isLight, ...props }) => (
    <TouchableOpacity
      title={"Next"}
      style={{ backgroundColor: theme.mediumGreen, height: 30, width: 30 }}
    />
  );

  const { height, width } = Dimensions.get("window");
  return (
    <Onboarding
      showNext={false}
      onSkip={() => console.log("this will go to the map screen")}
      showSkip={false}
      controlStatusBar={true}
      bottomBarColor="white"
      showPagination={false}
      controlStatusBar={false}
      pages={onboardingScreens}
      DotComponent={Square}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
    />
  );
};

export default OnboardingScreens;
