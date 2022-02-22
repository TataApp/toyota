import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 
import { useLocale } from '../hooks/useLocale';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AdressScreen from '../screens/profile/AdressScreen';
import AddAdresScreen from '../screens/profile/AddAdresScreen';
import MembershipInformationScreen from '../screens/settings/MembershipInformationScreen';
import ProfileInProfile from '../screens/MyProfileTab/ProfileInProfile';
import MainNavigation from './MainNavigation';
import StoreMainScreen from '../screens/store/StoreMainScreen';

const StoreStack = createStackNavigator<StoreParamList>();

export default function StoreNavigation() {
    return (
        <StoreStack.Navigator>
               <StoreStack.Screen
                name="StoreMainScreen"
                component={StoreMainScreen}
                options={ { headerTitle:useLocale({},'address')}}
            />
        
        </StoreStack.Navigator>
    )
}

const styles = StyleSheet.create({})
