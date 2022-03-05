import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, Image, LogBox, Modal, Text } from 'react-native'
import { View } from "../../components/themed/View";


import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators/index'
import { RootState } from '../../state/reducers';
import { addTripService } from '../../services/apiCalls/addTripService';
import { StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_KEY } from '../../constants/googleMapKey';
import imagesPath from '../../constants/imagesPath';
import { showError, showSuccess } from '../helper/helperFunction';
import { AsyncStorage } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function MainScreen({ navigation }: any) {

    

    //#region 
    const dispach = useDispatch();
    const statTimeAndDate = useSelector((state: RootState) => state.dateAndTime)

    //ActionCreators
    const { toAllMovingCheck } = bindActionCreators(ActionCreators, dispach)
    const { dateAndTimeCheckAction } = bindActionCreators(ActionCreators, dispach)






    const [trips, setTrips,] = useState([
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Sakarya', truckType: 'Büyük Kamyon', price: "534", key: "1" },
        { cityFromWhere: "Sakarya", cityToWhere: "Sakarya", regionFromWhere: "sedivan", regionToWhere: "adabazari", kilometers: "23km", label: 'Istanbul', truckType: 'Büyük Kamyon', price: "534", key: "2" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'ttt', truckType: 'Büyük Kamyon', price: "534", key: "3" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Sakarya', truckType: 'Büyük Kamyon', price: "534", key: "4" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Istanbul', truckType: 'Büyük Kamyon', price: "534", key: "5" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'ttt', truckType: 'Büyük Kamyon', price: "534", key: "6" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Sakarya', truckType: 'Büyük Kamyon', price: "534", key: "7" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Istanbul', truckType: 'Büyük Kamyon', price: "534", key: "8" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'ttt', truckType: 'Büyük Kamyon', price: "534", key: "9" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Sakarya', truckType: 'Büyük Kamyon', price: "534", key: "10" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'Istanbul', truckType: 'Büyük Kamyon', price: "534", key: "11" },
        { cityFromWhere: "Sakarya", cityToWhere: "Istanbul", regionFromWhere: "sedivan", regionToWhere: "uskudar", kilometers: "450km", label: 'ttt', truckType: 'Büyük Kamyon', price: "534", key: "12" },
    ]);






    //#endregion




    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",

        }, background: {
            backgroundColor: '#f2f2f7',
        }, flex1: {
            flex: 1
        }, separator: {
            borderBottomColor: '#c7c7c7',
            borderBottomWidth: 1,
        }, square: {
            width: 80,
            height: 80,
            borderColor: "#39A1A3",
            borderWidth: 1,
            borderRadius: 20,
            // borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 20,
            marginTop: 5,
            flexDirection: 'row',
            backgroundColor: "#39A1A3",
            justifyContent: "center",
            // alignContent:"center",
            alignItems: "center"


        }

    })




















    useEffect(() => {
        //Runs only on the first render
        StatusBar.setHidden(true);
        // Stages.length=1;


    }, []);




    return (

        <View style={[styles.flex1]}>

            <View style={{ flexDirection: 'row', backgroundColor: '#ffff' }}>
                <Image
                    style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 170, height: 34 }}
                    source={require('../../assets/images/logo3.png')}
                />
            </View>
            <View style={styles.separator}></View>

            <FlatList
                data={trips}
                // ItemSeparatorComponent = {itemSeprator}
                renderItem={({ item }) => (
                    <View>

                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                                    navigation.navigate("tripDetails")
                                }}
                            >
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ marginLeft: 20, fontSize: 20 }}>{item.cityFromWhere}</Text>
                                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12 }}>{item.kilometers}</Text>
                                    <Text style={{ marginLeft: 40, fontSize: 20 }}>{item.cityToWhere}</Text>
                                </View>

                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome style={{ marginLeft: 40, marginRight: 5, marginTop: 5 }} color="#53D283" size={FontSize.Regular} name={"circle"} />
                                    <View style={{
                                        borderBottomColor: '#c7c7c7',
                                        borderBottomWidth: 4,
                                        width: "50%",
                                        marginBottom: 5,

                                    }} />
                                    <AntDesign style={{ marginTop: 3 }} name="caretright" size={FontSize.Large} color="#C4666D" />

                                </View>

                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ marginLeft: 20, fontSize: 20, color: "#7B7B7B" }}>{item.regionFromWhere}</Text>
                                    <Text style={{ marginLeft: 0, fontSize: 15, marginTop: 20, color: "black" }}>{item.truckType}</Text>

                                    <Text style={{ marginLeft: 0, fontSize: 20, color: "#7B7B7B", marginBottom: 10 }}>{item.regionToWhere}</Text>
                                </View>


                            </View>

                            <View style={styles.square} >
                                <Text style={{ fontSize: 20, color: "#ffff", fontWeight: "700" }}>{item.price} TL</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.separator} />
                    </View>
                )}
            />

        </View>

    )



}


