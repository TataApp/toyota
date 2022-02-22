import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import { useLocale } from '../hooks/useLocale';
import ForgotPassword from '../screens/auth/ForgotPassword';
import FirstScreen from '../screens/auth/FirstScreen';
import SecondScreen from '../screens/auth/SecondScreen';
import InـoutOfCityScreen from '../screens/auth/InـoutOfCityScreen';
import ConfirmationPhoneCodeScreen from '../screens/auth/ConfirmationPhoneCodeScreen';
import EmployeeApp from '../screens/auth/EmployeeApp';
import ChooseLocation from '../screens/MyProfileTab/ChooseLocation';

const AuthStack = createStackNavigator<AuthNavigationParamList>();

export default function AuthNavigation() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="FirstScreen"
                component={FirstScreen}
                options={ {headerShown: false}}
            />
            <AuthStack.Screen
                name="SecondScreen"
                component={SecondScreen}
                options={ {headerShown: false}}
            />
            {/* <AuthStack.Screen
                name='EmployeeApp'
                component={EmployeeApp}
                options={ {headerShown: false}}
            /> */}
            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                
                options={{ headerTitle: useLocale({},"signInHeader") }}
            />
            <AuthStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerTitle: useLocale({},"signUpHeader") }}
            />
            <AuthStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerTitle: useLocale({},"ForgotPasswordHeader") }}
            />
              <AuthStack.Screen
                name="InـoutOfCityScreen"
                component={InـoutOfCityScreen}
                options={{headerShown: false}}
            />
             <AuthStack.Screen
                name="ChooseLocation"
                component={ChooseLocation}
                options={{
                    headerShown: false
                }}
            />
             <AuthStack.Screen
                name='ConfirmationPhoneCodeScreen'
                component={ConfirmationPhoneCodeScreen}
                options={{headerShown: false}}
            />
        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({})
