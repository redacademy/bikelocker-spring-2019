import AsyncStorage from "@react-native-community/async-storage";

export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem("userToken");
  } catch (e) {
    return false;
  }
};

export const getUserId = async () => {
  try {
    return await AsyncStorage.getItem("userId");
  } catch (e) {
    return e;
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
