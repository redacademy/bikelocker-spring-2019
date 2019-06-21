import AsyncStorage from "@react-native-community/async-storage";

export const _signInAsync = async () => {
  try {
    await AsyncStorage.setItem("userToken", "abc");
  } catch (e) {
    return false;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.setItem("userToken", null);
  } catch (e) {
    return false;
  }
};
