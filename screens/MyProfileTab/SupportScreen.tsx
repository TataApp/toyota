import React from 'react'
import { StyleSheet, Button, TouchableOpacityBase, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { StackNavigationProp } from '@react-navigation/stack'

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize'
import { useLocale } from '../../hooks/useLocale'






export default function SupportScreen({ navigation }: { navigation: StackNavigationProp<MyProfileParamList> }) {

    return (
        <View style={styles.container}>

                <TouchableOpacity style={styles.commandButton} onPress={() => {

                }} >
                    <FontAwesome style={{paddingLeft:20}} name="whatsapp" size={30} color="#3deb58" />
                    <Text style={styles.panelButtonTitle}>Whatsapp Destek</Text>
                    <FontAwesome style={{ marginLeft: 70, marginRight: 10 }} name={"chevron-right"} color={"#3deb58"} size={FontSize.xLarge}></FontAwesome>

                </TouchableOpacity>
                <Text style={{fontSize:30, fontWeight:"bold"}}>05525459198</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        alignItems:'center',
        alignContent:'center'

    }, TextInfo: {
        fontSize: 30,
        marginTop: 70,
        marginBottom: 20,
        marginLeft: 40

    }, square: {
        alignItems: "center",
        justifyContent: 'center',

        marginLeft: 20,
        marginTop: 15,
        width: 45,
        height: 45,
        borderRadius: 15,

        backgroundColor: "#F3F6FF",
    }, rectangle: {
        width: 40 * 2,
        height: 40,
        borderRadius: 11,
        marginLeft: 15,
        marginTop: 16,
        backgroundColor: "#F3F6FF",



        alignItems: "center",
        justifyContent: 'center',
    }, commandButton: {
        padding: 20,
        paddingLeft:0,
        paddingRight:0,
        marginLeft: 18,
        marginRight: 30,
        marginTop:120,
        marginBottom: 30,
        borderRadius: 12,
        backgroundColor: "#cdfad4",
        alignItems: 'center',
        flexDirection: "row",
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#3deb58',
        marginLeft: 10,
        paddingLeft: 20
    }


})
