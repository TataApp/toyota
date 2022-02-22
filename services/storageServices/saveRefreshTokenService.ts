import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function saveRefreshTokenService(refreshToken: string) {
    await AsyncStorage.setItem(REFRESH_TOKEN,refreshToken);
}