import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 
import { useLocale } from '../hooks/useLocale';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AdressScreen from '../screens/profile/AdressScreen';
import AddAdresScreen from '../screens/profile/AddAdresScreen';
import MembershipInformationScreen from '../screens/settings/MembershipInformationScreen';
import ProfileInProfile from '../screens/MyProfileTab/ProfileInProfile';

const ProfileStack = createStackNavigator<ProfileNavigationParamList>();

export default function ProfileNavigation() {
    return (
        <ProfileStack.Navigator>
               <ProfileStack.Screen
                name="AdressScreen"
                component={AdressScreen}
                options={ { headerTitle:useLocale({},'address')}}
            />
            
             <ProfileStack.Screen
                name="AddAdresScreen"
                component={AddAdresScreen}
                options={ { headerTitle:useLocale({},"address")}}
            />
          
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={ { headerTitle:useLocale({},"profileHeader")}}
            />
           
           
            
        </ProfileStack.Navigator>
    )
}

const styles = StyleSheet.create({})
