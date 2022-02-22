import React from 'react'
import { StyleSheet, Button, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { StackNavigationProp } from '@react-navigation/stack'
import GivingAnOffer from '../mainTab/GivingAnOffer'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useLocale } from '../../hooks/useLocale'





export default function MyProfile({ navigation }: { navigation: StackNavigationProp<MyProfileParamList> }) {

    return (
        <View style={styles.container}>
            <Text style={styles.TextInfo}>Günaydın</Text>
            {/* <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>navigation.navigate("SevedLoctionsScreen")}>
                <View style={styles.square} >
                    <MaterialCommunityIcons name="map-marker-multiple-outline" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}> {useLocale({},("SevedLoctions"))}</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>navigation.navigate("ProfileInProfileScreen")}>
                <View style={styles.square} >
                    <Ionicons name="ios-person-outline" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("profile"))}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={()=>navigation.navigate("MyWalletScreen")}>
                <View style={styles.square} >
                    <Ionicons name="wallet-outline" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("Wallet"))} </Text>
                <View style={styles.rectangle} >
                    <Text style={{color:"#B2B5C8"}}>0 TL</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={()=>navigation.navigate("SupportScreen")}   >
                <View style={styles.square} >
                    <AntDesign name="message1" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("Support"))}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <View style={styles.square} >
                    <Feather name="shield" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("PrivacyPolicy"))}</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <View style={styles.square} >
                    <MaterialCommunityIcons name="text-box-outline" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("TermsAndConditions"))}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <View style={styles.square} >
                    <AntDesign name="notification" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({},("Offers"))}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <View style={styles.square} >
                    <MaterialIcons name="language" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                </View>
                <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}> {useLocale({},("Language"))}</Text>
                <View style={styles.rectangle} >
                    <Text style={{color:"#B2B5C8"}}>English</Text>
                </View>
            </TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }, TextInfo: {
        fontSize: 30,
        marginTop: 30,
        marginBottom:20,
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
        marginLeft:15,
        marginTop:16,
        backgroundColor: "#F3F6FF",
        


        alignItems: "center",
        justifyContent: 'center',
      }


})
