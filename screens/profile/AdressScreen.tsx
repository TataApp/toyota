

import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { Card } from 'native-base'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { useLocale } from '../../hooks/useLocale'
import { useThemeColor } from '../../hooks/useThemeColor'
import { FontSize } from '../../constants/FontSize'


export default function AdressScreen( navigation ) {

    //const { id } = navigation.route.params
  //  console.log(id);

    const [people, setPeople] = useState([
        { name: 'Ahmed - Sakarya', id: '15 ton' },
        { name: 'Ramy - Trabzon', id: '20 ton' },


    ])


    // const id = navigation.getParam('id');
    // const id:any = props.navigation.getParam('id');

   

    return (
        <View style={styles.container}>


            <TouchableOpacity onPress={() => navigation.navigate('AddAdresScreen')}>
                <Card style={styles.listItem}>
                    <FontAwesome style={{ marginLeft: 160, color: '#676666' }} size={FontSize.xxxxxLarge} name={"plus"} />
                    <Text style={{ fontWeight: 'bold', marginLeft: 70, color: '#676666' }}>Yeni teslimat adresi ekle </Text>

                </Card>
            </TouchableOpacity>



            <FlatList
                data={people}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View >
                            <Card style={styles.listItem}>

                                <View style={styles.infoContainer}>
                                    <Text style={styles.AdressPlace}>Evim</Text>
                                    <Text style={styles.nameAndLastNameText}>Israa Bakir</Text>

                                    <Text style={styles.infoText}>
                                        Istiklal Mahallesi Bölük Sokak No: 27 Daire:1 Sakarya/Adapazarı
                                    </Text>
                                    <Text style={styles.infoText}>
                                        İstiklal / Adapazarı / Sakarya
                                    </Text>


                                    <Text style={styles.numberText}>
                                        905*******11
                                    </Text>



                                    <View style={{ flexDirection: "row", marginLeft: 200 }}>
                                        <TouchableOpacity>
                                            <Text style={{ marginTop: 20, fontWeight: 'bold', fontStyle: 'italic', color: "#A0A0A0" }}>Sil</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.commandButton}  >
                                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'submit')}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>





                            </Card>
                        </View>
                    );
                    // <Text style={styles.item} >{item.name}</Text>
                }}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    listItem: {
        padding: 20,
        marginLeft: 15,
        marginRight: 15,

    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CCA4FB",
        borderRadius: 100,

    },
    infoContainer: {
        flexDirection: "column"
    },
    contactIcon: {
        fontSize: 28,
        color: "#fff",

    },
    infoText: {
        fontSize: 16,
        fontWeight: "400",
        paddingLeft: 10,
        paddingTop: 2
    },
    nameAndLastNameText: {
        paddingLeft: 10,
        marginBottom: 10,
        color: "#676666",
        fontWeight: 'bold'
    },
    numberText: {
        fontSize: 16,
        fontWeight: '900',
        marginTop: 10,
        paddingLeft: 10,
    },
    AdressPlace: {
        paddingLeft: 10,
        marginBottom: 15,
        fontWeight: 'bold'

    },
    floatButton: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        position: "absolute",
        bottom: 20,
        // right: 10,
        left: 25,
        height: 60,
        backgroundColor: "#5031C2",
        borderRadius: 100
    }, commandButton: {
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 20,
        marginRight: 2,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: '#5031C2',
        alignItems: 'center',
        marginTop: 10,
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
})

