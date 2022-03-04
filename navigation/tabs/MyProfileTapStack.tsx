import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useLocale } from '../../hooks/useLocale';
import MyProfile from '../../screens/MyProfileTab/MyProfile';
import SettingsIcon from '../../components/SettingIcon';
import MyWallet from '../../screens/MyProfileTab/MyWallet';
// import tripDetails from '../../screens/mainTab/tripDetails';
import ProfileInProfile from '../../screens/MyProfileTab/ProfileInProfile';
// import placeAddress from '../../screens/MyProfileTab/placeAddress';
// import help from '../../screens/MyProfileTab/help';
import SupportScreen from '../../screens/MyProfileTab/SupportScreen';

const MyProfileStack = createStackNavigator<MyProfileParamList>();

export default function myProfileStack({ navigation }: { navigation: StackNavigationProp<MainNavigationParamList, "BottomTab"> }) {
    return (
        <MyProfileStack.Navigator>
            <MyProfileStack.Screen
                name="MyProfileScreen"
                component={MyProfile}
                options={{
                    headerShown: false ,
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
                }}
            />
             <MyProfileStack.Screen
                name="MyWalletScreen"
                component={MyWallet}
                options={{
                    headerShown: false ,
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
                }}
            />

             {/* <MyProfileStack.Screen
                name="SevedLoctionsScreen"
                component={SevedLoctions}
                options={{
                    headerShown: false ,
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
                }}
            /> */}

             <MyProfileStack.Screen
                name="ProfileInProfileScreen"
                component={ProfileInProfile}
                options={{
                    headerShown: false ,
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
                }}
            />
             {/* <MyProfileStack.Screen
                name="placeAddressScreen"
                component={placeAddress}
                options={{
                    headerShown: false ,
                 
                }}
            /> */}
             <MyProfileStack.Screen
                name="SupportScreen"
                component={SupportScreen}
                options={{
                    headerShown: false ,
                 
                }}
            />
            
        </MyProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})
