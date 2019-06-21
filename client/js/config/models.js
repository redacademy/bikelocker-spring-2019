// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "react-native";

export const _signInAsync = async () => {
  try {
    await AsyncStorage.setItem("userToken", "abc");
  } catch (e) {
    return false;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    return false;
  }
};
