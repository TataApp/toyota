import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { useLocale } from '../hooks/useLocale';
import SettingsStack from './settings/SettingsStack';
import ProfileNavigation from './ProfileNavigation';
import StoreNavigation from './StoreNavigation';

const MainStack = createStackNavigator<MainNavigationParamList>();

export default function MainNavigation() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="BottomTab"
                component={BottomTabNavigator}
                options={{ 
                    headerShown: false,
                 }}
            /> 
            <MainStack.Screen
                name="Settings"
                component={SettingsStack}
                options={{ headerShown: false}}
            />
            <MainStack.Screen
                name='Profile'
                component={ProfileNavigation}
                options={{ headerShown: false}}
            />
             {/* <MainStack.Screen
                name='Store'
                component={StoreNavigation}
                options={{ headerShown: false}}
            /> */}
           
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
