import React from 'react'
import { StyleSheet, Button, TouchableOpacityBase, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { StackNavigationProp } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize'






export default function MyProfile({ navigation }: { navigation: StackNavigationProp<MyProfileParamList> }) {

    return (
        <View style={styles.container}>

            <ImageBackground
                style={{ marginLeft: 0, width: 420, height: 180, borderBottomLeftRadius: 100 }}
                source={require('../../assets/images/myWallet.png')}
            >

                <Ionicons style={{ marginTop: 20, marginLeft: 10 }} name="chevron-back" size={FontSize.xxxxxxxLarge} color="#ffff" onPress={()=>navigation.navigate("MyProfileScreen")} />
                <Text style={{ fontSize: 28, marginLeft: 20, color: '#ffff' }} >Wallet</Text>
                <Text style={{ fontSize: 35, marginLeft: 20, color: '#ffff' }} >No Balance</Text>

                <View style={styles.commandButton}  >
                    <Text style={{fontSize:20}}>Latest Transaction</Text>
                </View>


            </ImageBackground>

            <Image
                style={{ marginLeft: 70, width: 250, height: 250, marginTop: 100 }}
                source={require('../../assets/images/myWallet2.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",

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
        marginLeft: 18,
        marginRight: 30,
        marginBottom: 30,
        borderRadius: 12,
        backgroundColor: "#ffff",
        alignItems: 'center',

        flexDirection: "row",
    }


})
