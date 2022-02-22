import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function saveAccessTokenService(accessToken: string) {
    await AsyncStorage.setItem(ACCESS_TOKEN,accessToken);
}