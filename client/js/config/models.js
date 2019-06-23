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
    await AsyncStorage.removeItem("userToken");
  } catch (e) {
    return false;
  }
};

export const getUserToken = async () => {
  try {
    return await AsyncStorage.getItem("userToken");
  } catch (e) {
    return false;
  }
};
export const setUserIdToken = async (id, token) => {
  try {
    return await AsyncStorage.setItem(["id", id], ["userToken", token]);
  } catch (e) {
    return false;
  }
};
