import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.spinner} />
    </View>
  );
};

export default Loader;
