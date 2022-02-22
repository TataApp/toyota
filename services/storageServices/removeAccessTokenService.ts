import { AsyncStorage } from "react-native"; 
// import AsyncStorage from '@react-native-community/async-storage';

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function removeAccessTokenService() {
    await AsyncStorage.removeItem(ACCESS_TOKEN);
}