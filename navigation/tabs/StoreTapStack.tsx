import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useLocale } from '../../hooks/useLocale';
import SettingsIcon from '../../components/SettingIcon';
import StoreMainScreen from '../../screens/store/StoreMainScreen';

const storeStack = createStackNavigator<StoreParamList>();

export default function SearchTabStack() {
    return (
        <storeStack.Navigator>
            <storeStack.Screen
                name="StoreMainScreen"
                component={StoreMainScreen}
                options={{ headerShown:false ,
             
             }}
            />
           
        </storeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
