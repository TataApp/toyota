import { StackNavigationProp } from "@react-navigation/stack"
import LottieView from "lottie-react-native"

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLocale } from "../../hooks/useLocale"
import { useThemeColor } from "../../hooks/useThemeColor"



export default function SuccessPage(navigation ) {

    const { data } = navigation.route.params
    // { navigation: StackNavigationProp<MainTabParamList> }
    return (

        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <LottieView
                style={{ height: 400, width: 400 }}
                source={require("../../assets/lottie/success.json")}
                autoPlay
            />

            <Text style={{ fontSize: 20, marginLeft: 16, marginBottom:20 , color: useThemeColor({}, "gri")  }}>{data}</Text>

            <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('MainScreen')} >
                <Text style={styles.panelButtonTitle}>{useLocale({}, 'ok')}</Text>

            </TouchableOpacity>

        </View>




    )
}


const styles = StyleSheet.create({
    commandButton: {
        padding: 15,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: '#5031C2',
        alignItems: 'center',
        marginTop: 10,
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }

})
