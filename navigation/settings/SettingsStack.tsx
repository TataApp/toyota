import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useLocale } from '../../hooks/useLocale';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import ChangePasswordScreen from '../../screens/settings/ChangePasswordScreen';
import ChangeProfileScreen from '../../screens/settings/ChangeProfileScreen';
import MembershipInformationScreen from '../../screens/settings/MembershipInformationScreen';

const Stack = createStackNavigator<SettingsStackParameterList>();

export default function SettingsStack({navigation}:{navigation:StackNavigationProp<MainNavigationParamList,"BottomTab">}) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
               options={{ headerTitle: useLocale({},"settingsHeader") }}
            />
             <Stack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
                options={{ headerTitle: useLocale({},"changePasswordHeader") }}
            />
             <Stack.Screen
                name="ChangeProfileScreen"
                component={ChangeProfileScreen}
                options={{ headerTitle: useLocale({},"changeProfileHeader") }}
            />
             <Stack.Screen
                name="MembershipInformationScreen"
                component={MembershipInformationScreen}
                options={{ headerTitle: useLocale({},"MembershipInformationScreenHeader") }}
            />
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})