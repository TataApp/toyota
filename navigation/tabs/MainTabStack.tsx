import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import MainScreen from '../../screens/mainTab/MainScreen';
import { useLocale } from '../../hooks/useLocale';
// import GivingAnOffer from '../../screens/mainTab/GivingAnOffer';
// import SuccessPage1 from '../../screens/mainTab/SuccessPage1';
// import ExistingDrivers from '../../screens/mainTab/ExistingDrivers';
// import TruckInformation from '../../screens/mainTab/TruckInformation';
// import GivingAnOfferDrivers from '../../screens/mainTab/GivingAnOfferDrivers';
// import SuccessPage2 from '../../screens/mainTab/SuccessPage2';
import { View } from '../../components/themed/View';
import SettingsIcon from '../../components/SettingIcon';
import SuccessPage from '../../components/customComponent/SuccessPage';
import { TabHeading } from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import ConfirmationPhoneCodeScreen from '../../screens/auth/ConfirmationPhoneCodeScreen';
import SevedLoctions from '../../screens/MyProfileTab/SevedLoctions';
import ChooseLocation from '../../screens/MyProfileTab/ChooseLocation';
import ProfileInProfile from '../../screens/MyProfileTab/ProfileInProfile';


const MainStack = createStackNavigator<MainTabParamList>();

export default function MainTabStack({ navigation }) {

    const [state, setstate] = useState("initialState")
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    headerShown: false
                    // headerTitle: useLocale({}, "mainHeader"),
                    // headerLeft: () =>
                    //     <SettingsIcon onClick={async () => navigation.openDrawer()} />
                }}
            />
            {/* <MainStack.Screen
            
                name="GivingAnOffer"
                component={GivingAnOffer}
                options={{
    
                    headerShown: false,
                    
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.openDrawer()} />

                }}
                
            /> */}
            {/* <MainStack.Screen
                name="SuccessPage1"
                component={SuccessPage1}
                options={{
                    headerTitle: useLocale({}, "SuccessPage1Header"),
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.openDrawer()} />

                }}
            /> */}
            {/* <MainStack.Screen
                name="ExistingDrivers"
                component={ExistingDrivers}
                options={{
                    headerTitle: useLocale({}, "ExistingDriversHeader"),
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.openDrawer()} />

                }}
            />
            <MainStack.Screen
                name="TruckInformation"
                component={TruckInformation}
                options={{
                    headerTitle: useLocale({}, "TruckInformationHeader"),
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.openDrawer()} />

                }}
            /> */}
            {/* <MainStack.Screen
                name="GivingAnOfferDrivers"
                component={GivingAnOfferDrivers}
                options={{
                    headerTitle: useLocale({}, "GivingAnOfferDriversHeader"),
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.openDrawer()} />

                }}
            /> */}
            {/* <MainStack.Screen
                name="SuccessPage2"
                component={SuccessPage2}
                options={{
                    headerTitle: useLocale({}, "SuccessPage2Header"),
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />

                }}
            /> */}
            <MainStack.Screen
                name="SuccessPage"
                component={SuccessPage}
                options={{

                    headerShown: false

                }}
            />

            <MainStack.Screen
                name="ConfirmationPhoneCodeScreen"
                component={ConfirmationPhoneCodeScreen}
                options={{
                    headerShown: false
                }}
            />
             <MainStack.Screen
                name="SevedLoctionsScreen"
                component={SevedLoctions}
                options={{
                    headerShown: false ,
                    headerLeft: () =>
                        <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
                }}
            />
            <MainStack.Screen
                name="ChooseLocation"
                component={ChooseLocation}
                options={{
                    headerShown: false
                }}
            />
             <MainStack.Screen
                name="ProfileInProfile"
                component={ProfileInProfile}
                options={{
                    headerShown: false
                }}
            />


        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({});
