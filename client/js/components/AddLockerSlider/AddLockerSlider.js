import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const AddLockerSlider = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{ color: "#FFF", fontSize: 30 }}>+</Text>
      </TouchableOpacity>
      {/* <Text style={{ color: "#FFF", paddingLeft: 10, fontSize: 20 }}>
        Press map to add a spot
      </Text>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={{ color: "#FFF", fontSize: 35 }}>X</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default AddLockerSlider;
