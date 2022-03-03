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



export default function MainScreen({ navigation }: any) {


    //#region 
    const dispach = useDispatch();
    const statTimeAndDate = useSelector((state: RootState) => state.dateAndTime)

    //ActionCreators
    const { toAllMovingCheck } = bindActionCreators(ActionCreators, dispach)
    const { dateAndTimeCheckAction } = bindActionCreators(ActionCreators, dispach)






    const [trips, setTrips,] = useState([
        { fromWhere: "Sakarya", toWhere: "Istanbul", kilometers: "450km", label: 'Sakarya', key: "1" },
        { fromWhere: "Sakarya", toWhere: "Istanbul", kilometers: "450km", label: 'Istanbul', key: "2" },
        { fromWhere: "Sakarya", toWhere: "Istanbul", kilometers: "450km", label: 'ttt', key: "3" },
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
                    style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                    source={require('../../assets/images/logo3.png')}
                />
            </View>

            <FlatList
                data={trips}
                // ItemSeparatorComponent = {itemSeprator}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 40, fontSize: 20 }}>{item.fromWhere}</Text>
                            <Text style={{ marginLeft: 40,marginTop:10, fontSize: 12 }}>{item.kilometers}</Text>
                            <Text style={{ marginLeft: 40, fontSize: 20 }}>{item.toWhere}</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome style={{ marginLeft: 65, marginRight: 5, marginTop: 5 }} color="#4dd404" size={FontSize.Regular} name={"circle"} />
                            <View style={{
                                borderBottomColor: '#c7c7c7',
                                borderBottomWidth: 4,
                                width: "40%",
                                marginBottom: 5,

                            }} />
                            <AntDesign style={{ marginTop: 3 }} name="caretright" size={FontSize.Large} color="#FF0000" />
                        
                        </View>
                        <View style={styles.separator}></View>
                    </View>
                )}
            />

        </View>

    )



}


