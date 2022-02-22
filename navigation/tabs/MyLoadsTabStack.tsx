import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useLocale } from '../../hooks/useLocale';
import MyLoads from '../../screens/MyLoadsTab/MyLoads';
// import OfferDetails from '../../screens/MyLoadsTab/OfferDetails';
import SettingsIcon from '../../components/SettingIcon';

const MyLoadsStack = createStackNavigator<MyLoadsParamList>();

export default function SearchTabStack({ navigation }: { navigation: StackNavigationProp<MainNavigationParamList, "BottomTab"> }) {
    return (
        <MyLoadsStack.Navigator>
            <MyLoadsStack.Screen
                name="MyLoadsScreen"
                component={MyLoads}
                options={{ headerShown:false ,
                headerLeft: () =>
                <SettingsIcon onClick={async () => navigation.navigate("Settings")} />
             }}
            />
            {/* <MyLoadsStack.Screen
                name="OfferDetails"
                component={OfferDetails}
                options={{ headerTitle: 'OfferDetails' }}
            /> */}
        </MyLoadsStack.Navigator>
    )
}

const styles = StyleSheet.create({})
