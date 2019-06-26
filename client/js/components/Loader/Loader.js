import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import theme from "../../config/globalStyles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={theme.mediumGreen}
        size={"large"}
        style={styles.spinner}
      />
    </View>
  );
};

export default Loader;
