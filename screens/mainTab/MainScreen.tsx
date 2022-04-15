import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, StyleSheet, Image, Dimensions, Modal, Text } from 'react-native'
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
import { getTripsForDriverService } from '../../services/apiCalls/getTripsForDriverService'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNetInfo } from "@react-native-community/netinfo";
import { useThemeColor } from '../../hooks/useThemeColor';


export default function MainScreen({ navigation }: any) {


    const netInfo = useNetInfo();

    //#region 
    const dispach = useDispatch();
    const statTimeAndDate = useSelector((state: RootState) => state.dateAndTime)

    //ActionCreators
    const { toAllMovingCheck } = bindActionCreators(ActionCreators, dispach)
    const { dateAndTimeCheckAction } = bindActionCreators(ActionCreators, dispach)



    const [Data, setData] = useState<any>([]);




    let response: any;
    const getTripsForDriver = async () => {
        response = await getTripsForDriverService().then(res => {
            console.log(res?.data.tripsForDrivers);
            console.log(res?.data.tripsForDrivers);

            setData(res?.data.tripsForDrivers);
        });
        console.log(".........!")

        console.log(Data)
        // setData(response.data.tripsForDrivers);
        if (response == null) {
            console.log("there is no trips!")
            // setData(response.tripsForDrivers);
        }
        if (response) {



        }
    }




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
            marginLeft: 5,
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
        // React.useCallback(() => {
        //     getTripsForDriver();
        //    }, [])
        getTripsForDriver();

    }, []);




    return (

        <View style={[styles.flex1]}>


            <View style={{ flexDirection: 'row', backgroundColor: '#ffff' }}>
                {/* <Text>Is Connected: {(netInfo.isConnected)}</Text> */}
                <Image
                    style={{ marginLeft: Dimensions.get('window').width / 2 - 70, marginBottom: 15, marginTop: 13, width: 120, height: 40 }}
                    source={require('../../assets/images/invis.png')}

                />
                <View style={{ marginTop: 20, marginLeft: 10 }}>
                        <FontAwesome5 name="wifi" size={FontSize.xLarge} color={netInfo.isConnected == true ? useThemeColor({}, "green") : useThemeColor({}, "red")} />
                </View>
            </View>
            <View style={styles.separator}></View>

            <FlatList
                data={Data}
                // ItemSeparatorComponent = {itemSeprator}
                //  key={ response.tripsForDrivers.customerPhone }
                keyExtractor={(item) => item.randomIdForTrip}

                renderItem={({ item }) => (


                    <View>
                        <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                            navigation.navigate("tripDetails", { assistants: item.assistants, customerPhone: item.customerPhone, distance: item.distance, fromWhere: item.fromWhere, houseType: item.houseType, price: item.price, randomIdForTrip: item.randomIdForTrip, toWhere: item.toWhere, tripDate: item.tripDate, tripDetailes: item.tripDetailes, tripServis: item.tripServis, tripTime: item.tripTime, vehicleType: item.vehicleType })
                        }}
                        >
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ marginLeft: 20, fontSize: 20 }}>{item.fromWhereCity}</Text>
                                    <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 12 }}>{item.distance} Km</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 20 }}>{item.toWhereCity}</Text>
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
                                    <Text style={{ marginLeft: 20, fontSize: 20, color: "#7B7B7B" }}>{item.fromWhereRegion}</Text>

                                    <View >

                                        {item.vehicleType == 0 &&
                                            <Text style={{ marginLeft: 0, fontSize: 13, marginTop: 20, color: "black" }}>Büyük Kamyon</Text>

                                        }
                                        {item.vehicleType == 1 &&
                                            <Text style={{ marginLeft: 0, fontSize: 13, marginTop: 20, color: "black" }}>Küçük Kamyon</Text>

                                        }
                                        {item.vehicleType == 2 &&
                                            <Text style={{ marginLeft: 0, fontSize: 13, marginTop: 20, color: "black" }}>Orta Kamyon</Text>

                                        }
                                        {item.vehicleType == 3 &&
                                            <Text style={{ marginLeft: 0, fontSize: 13, marginTop: 20, color: "black" }}>Büyük Kamyon</Text>
                                        }

                                    </View>

                                    {/* <Text style={{ marginLeft: 0, fontSize: 13, marginTop: 20, color: "black" }}>Büyük Kamyon</Text> */}

                                    <Text style={{ marginLeft: 0, fontSize: 20, color: "#7B7B7B", marginBottom: 10 }}>{item.toWhereRegion}</Text>
                                </View>


                            </View>

                            <View style={styles.square} >
                                <Text style={{ fontSize: 18, color: "#ffff", fontWeight: "700" }}>{item.price} TL</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.separator} />
                    </View>

                )}
            />

        </View>

    )



}


