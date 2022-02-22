import { AsyncStorage } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function removeRefreshTokenService() {
    await AsyncStorage.removeItem(REFRESH_TOKEN);
}