import React from "react";
import { ScrollView, Text, Linking } from "react-native";
import styles from "./styles";

const Resources = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.h2}>Helpful Resources</Text>
    <Text style={styles.p}>
      These resources will take you out of Bike Locker and open in your browser.
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL(
          "https://vancouver.ca/police/contact/report-a-crime.html"
        )
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL(
                "https://vancouver.ca/police/contact/report-a-crime.html"
              );
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      How to report a bicycle theft
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL(
          "https://taracarman.carto.com/builder/74faca9c-47d5-11e7-a4ba-0e3ebc282e83/embed"
        )
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL(
                "https://taracarman.carto.com/builder/74faca9c-47d5-11e7-a4ba-0e3ebc282e83/embed"
              );
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      2017 VPD Theft Hotspots
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL(
          "https://lifehacker.com/the-proper-way-to-lock-your-bicycle-5942301"
        )
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL(
                "https://lifehacker.com/the-proper-way-to-lock-your-bicycle-5942301"
              );
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      Bike Locking 101
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL("https://thebicyclevalet.ca/")
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL("https://thebicyclevalet.ca/");
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      Bicycle Valet
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL("https://project529.com/garage")
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL("https://project529.com/garage");
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      Project 529
    </Text>
    <Text
      style={styles.link}
      onPress={() =>
        Linking.canOpenURL(
          "https://www.translink.ca/Rider-Guide/Bike-Parking.aspx"
        )
          .then(supported => {
            if (!supported) {
              console.log("Can't handle url");
            } else {
              return Linking.openURL(
                "https://www.translink.ca/Rider-Guide/Bike-Parking.aspx"
              );
            }
          })
          .catch(err => console.error("An error occurred", err))
      }
    >
      Translink Bicycle Lockers
    </Text>
    <Text style={styles.p} />
  </ScrollView>
);

export default Resources;
