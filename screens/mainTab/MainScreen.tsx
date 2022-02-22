import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, Image, LogBox, Modal, Animated } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { useLocale } from '../../hooks/useLocale';
import { FontSize } from '../../constants/FontSize';

import InputWithLabel from '../../components/customComponent/InputWithLabel';
import StagesLayout from '../../components/layouts/StagesLayout';
import StagesLayoutForWithoutAccount from '../../components/layouts/StagesLayoutForWithoutAccount';


import { Feather, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-paper';
import { checkPhoneService } from '../../services/apiCalls/checkPhoneService';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import TimeAndDate from '../../components/customComponent/TimeAndDate';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'native-base';
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
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';



var moveMyHouse: boolean = false;
var moveMyStuff: boolean = false;
var moveMyOffice: boolean = false;
var anotherHouse: boolean = false;

export default function MainScreen({ navigation }: any) {


    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);
    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
    ]);
    //#region 
    const dispach = useDispatch();
    const state = useSelector((state: RootState) => state.WithoutAccount)
    const statTimeAndDate = useSelector((state: RootState) => state.dateAndTime)
    const state_movingCheck = useSelector((state: RootState) => state.movingCheck)

    //ActionCreators
    const { increaseNumberOfHelbers, decreaseNumberOfHelbers, movingCheck1, movingCheck2, movingCheck3, movingCheck4,
        movingCheck5, movingCheck6, movingCheck7, movingCheck8, movingCheck9, toAllMovingCheck
    } = bindActionCreators(ActionCreators, dispach)
    const { dateAndTimeCheckAction } = bindActionCreators(ActionCreators, dispach)




    const [color, setcolor] = useState('#B1B1B1');
    const [color2, setcolor2] = useState('#B1B1B1');
    const [color3, setcolor3] = useState('#B1B1B1');


    const [colorTransportType, setcolorTransportType] = useState('#B1B1B1');
    const [colorTransportType2, setcolorTransportType2] = useState('#B1B1B1');
    const [colorTransportType3, setcolorTransportType3] = useState('#B1B1B1');


    const [colorOfPaymentCash, setcolorOfPaymentCash] = useState('#ffff');
    const [colorOfPaymentCredit, setcolorOfPaymentCredit] = useState('black');



    const [colorOfBorder, setcolorOfBorder] = useState('#FFFFFF');
    const [colorOfBorder2, setcolorOfBorder2] = useState('#ffff');
    const [colorOfBorder3, setcolorOfBorder3] = useState('#949494');


    const [colorOfBorderTransportType, setcolorOfBorderTransportType] = useState('#ffff');
    const [colorOfBorderTransportType2, setcolorOfBorderTransportType2] = useState('#ffff');
    const [colorOfBorderTransportType3, setcolorOfBorderTransportType3] = useState('#ffff');


    const [colorOfBorderMiniKamyon, setcolorOfBorderMiniKamyon] = useState('#ffff');
    const [colorOfBorderLargeKamyon, setcolorOfBorderLargeKamyon] = useState('#ffff');
    const [colorOfBorderXLargeKamyon, setcolorOfBorderXLargeKamyon] = useState('#ffff');


    const [colorOfbackGround, setcolorOfbackGround] = useState('#ffff');
    const [colorOfbackGround2, setcolorOfbackGround2] = useState('#ffff');
    const [colorOfbackGround3, setcolorOfbackGround3] = useState('#ffff');



    const [colorOfbackGroundTransportType, setcolorOfbackGroundTransportType] = useState('#ffff');
    const [colorOfbackGroundTransportType2, setcolorOfbackGroundTransportType2] = useState('#ffff');
    const [colorOfbackGroundTransportType3, setcolorOfbackGroundTransportType3] = useState('#ffff');


    const [colorOfbackGroundMiniKamyon, setcolorOfbackGroundMiniKamyon] = useState('#ffff');
    const [colorOfbackGroundLargeKamyon, setcolorOfbackGroundLargeKamyon] = useState('#ffff');
    const [colorOfbackGroundXLargeKamyon, setcolorOfbackGroundXLargeKamyon] = useState('#ffff');




    const [colorOfbackGroundPrice, setcolorOfbackGroundPrice] = useState('#ffff');
    const [colorOfbackGroundPaymentCash, setcolorOfbackGroundPaymentCash] = useState('#5031C2');
    const [colorOfbackGroundPaymentCredit, setcolorOfbackGroundPaymentCredit] = useState('#ffff');
    const [colorOfbackGroundContract, setcolorOfbackGroundContract] = useState('#ffff');







    const [colorOfBorderForRomms, setcolorOfBorderForRomms] = useState('#949494');
    const [colorOfBorderForRomms2, setcolorOfBorderForRomms2] = useState('#949494');
    const [colorOfBorderForRomms3, setcolorOfBorderForRomms3] = useState('#949494');
    const [colorOfBorderForRomms4, setcolorOfBorderForRomms4] = useState('#949494');
    const [colorOfBorderForRomms5, setcolorOfBorderForRomms5] = useState('#949494');
    const [colorOfbackGroundForRomms, setcolorOfbackGroundForRomms] = useState('#ffff');
    const [colorOfbackGroundForRomms2, setcolorOfbackGroundForRomms2] = useState('#ffff');
    const [colorOfbackGroundForRomms3, setcolorOfbackGroundForRomms3] = useState('#ffff');
    const [colorOfbackGroundForRomms4, setcolorOfbackGroundForRomms4] = useState('#ffff');
    const [colorOfbackGroundForRomms5, setcolorOfbackGroundForRomms5] = useState('#ffff');

    const [colorOfBorderPrice, setcolorOfBorderPrice] = useState('#949494');




    const [openRegin, setOpenRegin] = useState(false);
    const [openRegin2, setOpenRegin2] = useState(false);
    const [valueRegin, setValueRegin] = useState(null);
    const [valueRegin2, setValueRegin2] = useState(null);
    const [itemsRegion, setItemsRegin,] = useState([
        { label: 'Sakarya', value: 1 },
        { label: 'Istanbul', value: 2 },
        { label: 'ttt', value: 3 },
    ]);


    const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>('');
    const [fromWhereAddressDetails, setfromWhereAddressDetails] = useState('');
    const [toWhereAddressDetails, settoWhereAddressDetails] = useState('');
    const [addressDetailsPay, setaddressDetailsPay] = useState('');
    const [itemsDetails, setitemsDetails] = useState('');
    const [nameOnTheCard, setnameOnTheCard] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [cardCVC, setcardCVC] = useState('');
    const [cardMonth, setcardMonth] = useState('');
    const [cardYear, setcardYear] = useState('');
    const [gmail, setgmail] = useState('');
    const [phone, setPhone] = useState<string>('');
    const [payCash, setpayCash] = useState(1);
    // const [rooms, setrooms] = useState("");
    const [rooms, setrooms] = useState({
        roomsText: "",
        number: 1,

    });
    const [vehicleType, setVehicleType] = useState({
        vehicleTypeText: "",
        vehicleTypeNo: 0
    });
    const [addresCheck, setAddresCheck] = useState(false);

    // const [anotherHouse, setanotherHouse] = useState(false);
    //  const [moveMyStuff, setmoveMyStuff] = useState(false);
    // const [moveMyOffice, setmoveMyOffice] = useState(false);
    //   const [moveMyHouse, setmoveMyHouse] = useState(false);
    const [numberOfHelbers, setnumberOfHelbers] = useState(0);
    const [outOfTheCity, setoutOfTheCity] = useState(false);
    const [withinTheCity, setwithinTheCity] = useState(false);
    const [miniKamyon, setminiKamyon] = useState(false);
    const [largeKamyon, setlargeKamyon] = useState(false);
    const [XlargeKamyon, setXlargeKamyon] = useState(false);
    const [backgroundCheck, setbackgroundCheck] = useState("#D3D3D3");
    const [backgroundCheck1, setbackgroundCheck1] = useState("#D3D3D3");
    const [backgroundCheck2, setbackgroundCheck2] = useState("#D3D3D3");
    const [backgroundCheck3, setbackgroundCheck3] = useState("#D3D3D3");
    const [backgroundCheck4, setbackgroundCheck4] = useState("#5031C2");
    const [backgroundCheck5, setbackgroundCheck5] = useState("#5031C2");
    const [backgroundCheck6, setbackgroundCheck6] = useState("#D3D3D3");
    const [backgroundCheck7, setbackgroundCheck7] = useState("#D3D3D3");
    const [backgroundCheck8, setbackgroundCheck8] = useState("#D3D3D3");
    const [backgroundCheck9, setbackgroundCheck9] = useState("#D3D3D3");


    const [TripServis, setTripServis] = useState(0);


    const screen = Dimensions.get('window');
    const ASPECT_RATIO = screen.width / screen.height;
    const LATITUDE_DELTA = 0.04;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const [stateCards, setStateCards] = useState({
        pickupCords: {
            latitude: 40.7828018,
            longitude: 30.3204873,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            formatted_address: "",
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
        },
        destinationCords: {
            latitude: 40.7828018,
            longitude: 30.3204873,
            formatted_address: "",
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
        },
        distance: 0,

    })
    const [price, setPrice] = useState<any>(0);

    const { pickupCords, destinationCords, distance } = stateCards;

    const mapRef = useRef<any>();





    //#endregion




    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",

        }, background: {
            backgroundColor: '#f2f2f7',
        }, map: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
        }, modalBackGround: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        bottomCard: {
            backgroundColor: 'white',
            width: '100%',
            padding: 30,
            borderTopEndRadius: 24,
            borderTopStartRadius: 24
        },
        modalContainer: {
            width: '80%',
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 20,
            elevation: 20,
        },
        inpuStyle: {
            backgroundColor: 'white',
            borderRadius: 4,
            borderWidth: 1,
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            marginTop: 16
        },
        titleText:
        {
            fontSize: FontSize.Large,
            paddingTop: 30,
            paddingRight: 115,


        }, button: {
            paddingBottom: 110,
            paddingLeft: 30,
            paddingRight: 30,

            //  width:

        }, newUser: {
            paddingBottom: 10,
            color: "#736e6e",
            fontWeight: "bold"


        },
        topLabel: {
            //paddingBottom: 40,
            marginBottom: 15,
            marginTop: 10,
            marginLeft: 30,
            paddingRight: 45,
            fontSize: 20,
            // textAlign: 'center',
            color: "black"


        }, topLabel2: {
            //paddingBottom: 40,
            marginBottom: 15,
            marginTop: 30,
            marginLeft: 25,
            paddingRight: 45,
            fontSize: 20,
            color: "black"


        },
        circle: {
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
            borderColor: '#EBEBEB',
            borderWidth: 3,
            backgroundColor: '#ffff'

        },
        center: {
            width: '100%',
            //  flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 30,
            paddingTop: 30
        },
        flex1: {
            flex: 1,
        },
        rowFlex: {
            flexDirection: 'row'
        },
        spaceBetween: {
            justifyContent: 'space-between'
        },
        empty: {
            height: 500,
            backgroundColor: "#FFF"

        }, rectangleForText: {
            flexGrow: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 5,
            paddingBottom: 20,
            backgroundColor: '#ffff'


        }, rectangle: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorder,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGround


        }, rectangle2: {
            width: 167 * 2,
            height: 115,

            borderColor: colorOfBorder2,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 40,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGround2
        }, rectangleTransportType: {
            width: 167 * 2,
            height: 115,
            borderTopRightRadius: 30,
            borderColor: colorOfBorderTransportType,
            borderWidth: 1,
            borderRadius: 20,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundTransportType


        }, rectangleTransportType2: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorderTransportType2,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,

            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundTransportType2


        }, rectangleTransportType3: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorderTransportType3,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,

            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundTransportType3


        }, rectangleMiniKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorderMiniKamyon,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundMiniKamyon


        }, rectangleLargeKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorderLargeKamyon,
            borderWidth: 1,
            borderTopRightRadius: 30,
            borderRadius: 20,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundLargeKamyon


        }, rectangleXLargeKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: colorOfBorderXLargeKamyon,
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundXLargeKamyon


        }
        , rectangle3: {
            width: 167 * 2,
            height: 70,

            borderColor: colorOfBorder3,
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGround3
        }, phoneCommandButton: {
            padding: 15,
            marginLeft: 15,
            marginRight: 40,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck,
            alignItems: 'center',

            flexDirection: "row",
        } , commandButton: {
            padding: 15,
            marginLeft: 28,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck,
            alignItems: 'center',

            flexDirection: "row",
        }
        , commandButton1: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck1,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton2: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck2,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton3: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck3,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton4: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck4,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton5: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck5,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton6: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck6,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton7: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck7,
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton8: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: "#5031C2",
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton9: {
            padding: 0,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#5031C2',
            borderWidth: 1,
            backgroundColor: backgroundCheck9,
            alignItems: 'center',

            flexDirection: "row",




        }
        , panelButtonTitle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 35,
            paddingRight: 60,
            paddingLeft: 60
        },
        commandButtonSmall: {
            padding: 15,
            marginLeft: 10,
            paddingRight: 20,
            marginRight: 5,
            marginBottom: 10,
            borderRadius: 12,
            backgroundColor: '#5031C2',
            alignItems: 'center',

            flexDirection: "row",
        }, panelButtonTitleSmall: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 50
        }, rectangleForNumbers: {
            width: 155 * 2,
            height: 45,
            borderColor: colorOfBorderForRomms,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms


        }, rectangleForNumbers2: {
            width: 155 * 2,
            height: 45,
            borderColor: colorOfBorderForRomms2,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms2


        }, rectangleForNumbers3: {
            width: 155 * 2,
            height: 45,
            borderColor: colorOfBorderForRomms3,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms3


        }, rectangleForNumbers4: {
            width: 155 * 2,
            height: 45,
            borderColor: colorOfBorderForRomms4,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms4


        }, rectangleForNumbers5: {
            width: 155 * 2,
            height: 45,
            borderColor: colorOfBorderForRomms5,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms5


        }, rectanglePhone: {
            width: 60,
            height: 50,
            borderColor: colorOfBorderForRomms5,
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundForRomms5

        }, price: {
            width: 320,
            height: 230,
            borderColor: colorOfBorderPrice,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 60,
            marginLeft: 20,
            backgroundColor: colorOfbackGroundPrice,
            flexGrow: 1

        },
        listItem: {
            //  flexDirection: "row",
            // padding: 20,
            marginLeft: 15,
            marginRight: 15,
            marginTop: 10,
            borderRadius: 28,
            justifyContent: "space-between",

        },
        PaymentCash: {
            width: 180,
            height: 50,
            borderColor: '#949494',
            borderWidth: 1,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginBottom: 10,
            marginTop: 30,
            marginLeft: 24,
            backgroundColor: colorOfbackGroundPaymentCash,
            flexGrow: 1,
            alignItems: 'center'
        }, PaymentCredit: {
            width: 180,
            height: 50,
            borderColor: '#949494',
            borderWidth: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            marginBottom: 10,
            marginTop: 30,
            marginLeft: 0,
            backgroundColor: colorOfbackGroundPaymentCredit,
            flexGrow: 1,
            alignItems: 'center'
        }, contract: {

            width: 30,
            height: 30,
            borderColor: '#949494',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 40,
            marginLeft: 20,
            backgroundColor: colorOfbackGroundContract,
        },
        header: {
            width: '100%',
            height: 40,
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
    })










    const onSuccess = async () => {

    }




    //#region 
    const colorHandler = () => {
        setcolor('#5031C2')
        setcolor2('#B1B1B1')
        setcolor3('#B1B1B1')
        setcolorOfBorder('#5031C2')
        // setcolorOfbackGround('#EDEDED')
        setcolorOfBorder2('#ffff')
        setcolorOfbackGround2('#ffff')
        setcolorOfbackGround3('#ffff')


    }
    const colorHandler2 = () => {
        setcolor('#B1B1B1')
        setcolor2('#5031C2')
        setcolor3('#B1B1B1')
        setcolorOfBorder('#ffff')
        //  setcolorOfbackGround2('#EDEDED')
        setcolorOfBorder2('#5031C2')
        setcolorOfbackGround('#ffff')
        setcolorOfbackGround3('#ffff')



    }


    const colorHandlerTransportType = () => {
        setcolorTransportType('#5031C2');
        setcolorTransportType2('#B1B1B1');
        setcolorTransportType3('#B1B1B1')

        setcolorOfBorderTransportType('#5031C2')
        setcolorOfBorderTransportType2('#ffff')
        setcolorOfBorderTransportType3('#ffff')

        //  setcolorOfbackGroundTransportType('#EDEDED')
        // setcolorOfbackGroundTransportType2('#ffff')
        // setcolorOfbackGroundTransportType3('#ffff')

    }

    const colorHandlerTransportType2 = () => {
        setcolorTransportType('#B1B1B1');
        setcolorTransportType2('#5031C2');
        setcolorTransportType3('#B1B1B1')

        setcolorOfBorderTransportType('#ffff')
        setcolorOfBorderTransportType2('#5031C2')
        setcolorOfBorderTransportType3('#ffff')

        // setcolorOfbackGroundTransportType('#ffff')

        // setcolorOfbackGroundTransportType2('#EDEDED')
        // setcolorOfbackGroundTransportType3('#ffff')

    }



    const colorHandlerTransportType3 = () => {
        setcolorTransportType('#B1B1B1');
        setcolorTransportType2('#B1B1B1');
        setcolorTransportType3('#5031C2')

        setcolorOfBorderTransportType('#ffff')
        setcolorOfBorderTransportType2('#ffff')
        setcolorOfBorderTransportType3('#5031C2')

        // setcolorOfbackGroundTransportType('#ffff')
        // setcolorOfbackGroundTransportType2('#ffff')
        // setcolorOfbackGroundTransportType3('#EDEDED')

    }








    const colorHandlerForRooms = () => {

        setcolorOfBorderForRomms('#5031C2');
        setcolorOfBorderForRomms2('#949494');
        setcolorOfBorderForRomms3('#949494');
        setcolorOfBorderForRomms4('#949494');
        setcolorOfBorderForRomms5('#949494');

        setcolorOfbackGroundForRomms('#EDEDED')
        setcolorOfbackGroundForRomms2('#ffff')
        setcolorOfbackGroundForRomms3('#ffff')
        setcolorOfbackGroundForRomms4('#ffff')
        setcolorOfbackGroundForRomms5('#ffff')


        // setanotherHouse(false);
        anotherHouse = false;


    }

    const colorHandlerForRooms2 = () => {

        setcolorOfBorderForRomms('#949494');
        setcolorOfBorderForRomms2('#5031C2');
        setcolorOfBorderForRomms3('#949494');
        setcolorOfBorderForRomms4('#949494');
        setcolorOfBorderForRomms5('#949494');

        setcolorOfbackGroundForRomms('#ffff')
        setcolorOfbackGroundForRomms2('#EDEDED')
        setcolorOfbackGroundForRomms3('#ffff')
        setcolorOfbackGroundForRomms4('#ffff')
        setcolorOfbackGroundForRomms5('#ffff')

        // setanotherHouse(false);
        anotherHouse = false;


    }

    const colorHandlerForRooms3 = () => {

        setcolorOfBorderForRomms('#949494');
        setcolorOfBorderForRomms2('#949494');
        setcolorOfBorderForRomms3('#5031C2');
        setcolorOfBorderForRomms4('#949494');
        setcolorOfBorderForRomms5('#949494');

        setcolorOfbackGroundForRomms('#ffff')
        setcolorOfbackGroundForRomms2('#ffff')
        setcolorOfbackGroundForRomms3('#EDEDED')
        setcolorOfbackGroundForRomms4('#ffff')
        setcolorOfbackGroundForRomms5('#ffff')

        //   setanotherHouse(false);
        anotherHouse = false


    }

    const colorHandlerForRooms4 = () => {

        setcolorOfBorderForRomms('#949494');
        setcolorOfBorderForRomms2('#949494');
        setcolorOfBorderForRomms3('#949494');
        setcolorOfBorderForRomms4('#5031C2');
        setcolorOfBorderForRomms5('#949494');

        setcolorOfbackGroundForRomms('#ffff')
        setcolorOfbackGroundForRomms2('#ffff')
        setcolorOfbackGroundForRomms3('#ffff')
        setcolorOfbackGroundForRomms4('#EDEDED')
        setcolorOfbackGroundForRomms5('#ffff')

        //  setanotherHouse(false);
        anotherHouse = false;

    }

    const colorHandlerForRooms5 = () => {

        setcolorOfBorderForRomms('#949494');
        setcolorOfBorderForRomms2('#949494');
        setcolorOfBorderForRomms3('#949494');
        setcolorOfBorderForRomms4('#949494');
        setcolorOfBorderForRomms5('#5031C2');

        setcolorOfbackGroundForRomms('#ffff')
        setcolorOfbackGroundForRomms2('#ffff')
        setcolorOfbackGroundForRomms3('#ffff')
        setcolorOfbackGroundForRomms4('#ffff')
        setcolorOfbackGroundForRomms5('#EDEDED')

        //  setanotherHouse(true);
        anotherHouse = true;

    }



    const colorHandlerMiniKamyon = () => {

        setcolorOfBorderMiniKamyon('#5031C2');
        setcolorOfBorderLargeKamyon('#ffff');
        setcolorOfBorderXLargeKamyon('#ffff');


        // setcolorOfbackGroundMiniKamyon('#EDEDED')
        // setcolorOfbackGroundLargeKamyon('#ffff')
        // setcolorOfbackGroundXLargeKamyon('#ffff')



    }

    const colorHandlerLargeKamyon = () => {

        setcolorOfBorderMiniKamyon('#ffff');
        setcolorOfBorderLargeKamyon('#5031C2');
        setcolorOfBorderXLargeKamyon('#ffff');


        // setcolorOfbackGroundMiniKamyon('#ffff')
        // setcolorOfbackGroundLargeKamyon('#EDEDED')
        // setcolorOfbackGroundXLargeKamyon('#ffff')



    }
    const colorHandlerXLargeKamyon = () => {

        setcolorOfBorderMiniKamyon('#ffff');
        setcolorOfBorderLargeKamyon('#ffff');
        setcolorOfBorderXLargeKamyon('#5031C2');


        // setcolorOfbackGroundMiniKamyon('#ffff')
        // setcolorOfbackGroundLargeKamyon('#ffff')
        // setcolorOfbackGroundXLargeKamyon('#EDEDED')



    }




    const colorHandlerPrice = () => {
        setcolorOfbackGroundPrice('#EDEDED')
        setcolorOfBorderPrice('#EDEDED')

    }

    const colorHandlerPaymentCash = () => {
        setpayCash(1)
        setcolorOfPaymentCash('#ffff')
        setcolorOfbackGroundPaymentCash('#5031C2')


        setcolorOfPaymentCredit('black')
        setcolorOfbackGroundPaymentCredit('#ffff')


    }
    const colorHandlerPaymentCredit = () => {
        setpayCash(0)
        setcolorOfPaymentCredit('#ffff')
        setcolorOfbackGroundPaymentCredit('#5031C2')


        setcolorOfPaymentCash('black')
        setcolorOfbackGroundPaymentCash('#ffff')


    }


    const colorHandlerContract = () => {
        if (colorOfbackGroundContract === '#5031C2') {
            setcolorOfbackGroundContract('#ffff')

        } else {
            setcolorOfbackGroundContract('#5031C2')
        }

    }

    //#endregion


    // const TripServics = () => {
    //     console.log("TripServics   fun")

    //     console.log("moveMyHouse: " + moveMyHouse)
    //     console.log("TripServis: " + TripServis)
    //     if (moveMyHouse == true) {
    //         // setTripServis(PrevTripServis => PrevTripServis + 1)
    //         setTripServis(1);
    //         console.log("TripServis after: " + TripServis)
    //     }


    //     console.log("moveMyStuff: " + moveMyStuff)
    //     console.log("TripServis: " + TripServis)
    //     if (moveMyStuff == true) {
    //         setTripServis(2)
    //     }

    //     console.log("moveMyOffice: " + moveMyOffice)
    //     console.log("TripServis: " + TripServis)

    //     if (moveMyOffice == true) {
    //         setTripServis(3)
    //     }

    // }

    const AddTrip = async (): Promise<boolean> => {

        var randomIdForTrip = Math.floor(Math.random() * 10000);
        console.log("random: " + randomIdForTrip);

        console.log("test signIn");
        console.log("statTimeAndDate.date " + statTimeAndDate.date);

        let result: boolean = true;

        let response = await addTripService(
            phone,
            pickupCords.formatted_address,
            destinationCords.formatted_address,
            statTimeAndDate.date,
            statTimeAndDate.time,
            TripServis,
            rooms.number,
            vehicleType.vehicleTypeNo,
            numberOfHelbers,
            randomIdForTrip,
            price,
            itemsDetails,

        )

        console.log("response.success: " + response.success)

        if (response.success == true) {

            return true
        }


        return false;
    }




    const fetchValue = (data: any) => {
        console.log("this is data", data)
        setStateCards({
            ...stateCards,
            pickupCords: {
                latitude: data.pickupCords.latitude,
                longitude: data.pickupCords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                formatted_address: data.pickupCords.formatted_address,

            },
            destinationCords: {
                latitude: data.destinationCords.latitude,
                longitude: data.destinationCords.longitude,
                formatted_address: data.destinationCords.formatted_address,

            }
        })
    }
    const fetchDistance = (d: any) => {
        setStateCards(stateCards => ({ ...stateCards, distance: d }))
    }

    const onPressLocation = () => {
        setAddresCheck(true);
        setbackgroundCheck2("#5031c2");
        navigation.navigate('ChooseLocation', { getCordinates: fetchValue })
        //  navigation.navigate('ChooseLocation')
    }

    const calculatePrice = (distance: any, helpers: any) => {
        console.log("d " + distance); //9.246
        console.log("h " + helpers);
        // let price: number = 0;
        if (moveMyStuff == true) {

            if (miniKamyon) {
                // price = (distance * 10) + (helpers * 150);
                setPrice((distance * 10) + (helpers * 150));
            } else if (largeKamyon) {
                // price = (distance * 20) + (helpers * 150);
                setPrice((distance * 20) + (helpers * 150));

            } else {
                // price = (distance * 30) + (helpers * 150);
                setPrice((distance * 30) + (helpers * 150));
            }

        } else {

            if (rooms.number == 1) {
                // price = 1300;
                setPrice(1300);
            } else if (rooms.number == 2) {
                // price = 1500;
                setPrice(1500);

            } else if (rooms.number == 3) {
                // price = 1600;
                setPrice(1600);

            } else if (rooms.number == 4) {
                // price = 1700;
                setPrice(1700);

            } else {
                // price = 0;
                setPrice(0);


            }
        }
        // setPrice(price);
        console.log("price: " + price);
    }



    const [visible, setVisible] = React.useState(false);
    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>

                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>
        );
    };


    const getPhoneFromStorge = async () => {
        try {

            let phone = await AsyncStorage.getItem("phone");

            if (phone !== null) {
                setPhone(phone);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //Runs only on the first render
        StatusBar.setHidden(true);
        // Stages.length=1;
        

    }, []);



    const Stages: StageForWithoutAccount[] = [
        { // 0
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) => (
                <View style={[

                    styles.flex1,
                    { backgroundColor: "#f2f2f7" }

                ]}>

                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />



                    <ScrollView>

                        <Text style={styles.topLabel} > {useLocale({}, "InـoutOfCityLabel")}</Text>

                        <TouchableOpacity onPress={() => {
                            // setfirstScreenMoveCheck(true)
                            movingCheck1(true)
                            setbackgroundCheck("#5031C2")
                            setwithinTheCity(true)
                            setoutOfTheCity(false)
                            colorHandler()
                        }} >
                            <View style={styles.rectangle}  >
                                <Text style={{ marginTop: 40, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Large, color: 'black' }}>{useLocale({}, "withinTheCity")}</Text>
                                {/* <MaterialCommunityIcons style={{ marginLeft: 110, marginTop: 15 }} name="home-city-outline" size={40} color={color} /> */}
                                <Image
                                    style={{ marginLeft: 47, width: 120, height: 116 }}
                                    source={require('../../assets/images/1.png')}
                                />
                            </View>
                        </TouchableOpacity>

                        {withinTheCity === true &&
                            <View style={{ backgroundColor: "#f2f2f7" }}>
                                <View style={styles.rectangleForText}  >
                                    <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Sakarya ile sınırlıyız ama yakında yardım etmek için yanınızda olacağız 😃 .</Text>
                                </View>


                                <View style={styles.rectangleForText}  >
                                    <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Nakliye ekiplerimizin eldiven, maske ve dezenfektan gibi malzemeleri kullanmaları için gerekli yönlendirme ve tedarikleri sağlıyoruz. 😷 .</Text>
                                </View>

                            </View>

                        }

                        <TouchableOpacity onPress={() => {
                            //    setfirstScreenMoveCheck(true)
                            movingCheck1(true)
                            setbackgroundCheck("#5031C2")
                            setoutOfTheCity(true)
                            setwithinTheCity(false)
                            colorHandler2()
                        }} >
                            <View style={styles.rectangle2} >
                                <Text style={{ marginTop: 40, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Regular, color: 'black' }}>{useLocale({}, "outOfTheCity")}</Text>
                                <Image
                                    style={{ marginLeft: 17, width: 120, height: 116 }}
                                    source={require('../../assets/images/2.png')}
                                />
                            </View>
                        </TouchableOpacity>




                        {outOfTheCity === true && <View style={{ backgroundColor: "#f2f2f7" }}>
                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Şehirler arası taşıma rezervasyonlarında tüm iller için taşıma fiyat teklifimizi göremeyebilirsin. 🌝</Text>
                            </View>


                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Taşıma fiyatı olmayan iller arası taşıma rezervasyonun için seninle iletişime geçeceğiz. 😇</Text>
                            </View>

                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Bazı taşımalarda asansör ile taşıma ihtiyacı olabiliyor. Böyle bir ihtiyaç olduğu durumda ek olarak bu hizmeti sağlayabileceğimizden emin olabilirsin😊</Text>
                            </View>

                        </View>
                        }



                    </ScrollView>





                    <View style={{ flexDirection: "row", marginRight: 0, backgroundColor: '#f2f2f7' }}>


                        <TouchableOpacity style={styles.commandButton} onPress={() => {
                            console.log("state_movingCheck.movingCheck1:  " + state_movingCheck.movingCheck1)
                            if (state_movingCheck.movingCheck1 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                                getPhoneFromStorge()
                            } else {

                                showError("Lütfen uygun olanı seçin")
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 40 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>


                </ View>





            ),
            Verifyier: async () => true,
            Submit: async () => true

        },
        { // 1 type of service 
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) => (
                <View style={[
                    styles.flex1,
                    { backgroundColor: "#f2f2f7" }

                ]}>
                   
                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />

                    <ScrollView>

                        <Text style={styles.topLabel} > {useLocale({}, "InـoutOfCityLabel2")}</Text>

                        <TouchableOpacity onPress={() => {
                            colorHandlerTransportType()
                            movingCheck2(true)
                            setbackgroundCheck1("#5031C2")
                            setTripServis(1);
                            moveMyHouse = true;

                            // setmoveMyStuff(false)
                            moveMyStuff = false;
                            //  setmoveMyOffice(false)
                            moveMyOffice = false;

                        }} >
                            <View style={styles.rectangleTransportType}  >
                                <Text style={{ color: 'black', marginTop: 40, marginLeft: 20, fontStyle: 'italic', fontSize: FontSize.Large }}>{useLocale({}, "movingMyHouse")}</Text>
                                <Image
                                    style={{ marginLeft: 46, width: 130, height: 115 }}
                                    source={require('../../assets/images/3.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        {moveMyHouse === true &&
                            <View style={{ backgroundColor: "#f2f2f7" }}>
                                <View style={styles.rectangleForText}  >
                                    <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Beyaz eşyalarını ve elektronik ürünlerini test ettikten sonra paketliyoruz. Yeni evinde tekrar test ettikten sonra monte ediyoruz. 🛠️ .</Text>
                                </View>


                                <View style={styles.rectangleForText}  >
                                    <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Dolap, karyola ve kitaplık gibi tüm büyük mobilyalarını demonte ediyoruz, paketliyoruz ve yeni evinde montaj işlemlerini sağlıyoruz. 💪 .</Text>
                                </View>


                                <View style={styles.rectangleForText}  >
                                    <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Duvara monte, avize ve stor perde montajı gibi hizmetleri bir sonraki adımda alabilirsin. 👍 .</Text>
                                </View>

                            </View>

                        }


                        <TouchableOpacity onPress={() => {
                            colorHandlerTransportType2()
                            movingCheck2(true)
                            setbackgroundCheck1("#5031C2")
                            setTripServis(2);

                            //  setmoveMyStuff(true)
                            moveMyStuff = true;

                        
                            moveMyOffice = false;

                            moveMyHouse = false;
                            // setmoveMyHouse(false)




                        }} >
                            <View style={styles.rectangleTransportType2} >
                                <Text style={{ color: 'black', marginTop: 40, marginLeft: 20, fontStyle: 'italic', fontSize: FontSize.Large }}>{useLocale({}, "moveMyStuff")}</Text>
                                <Image
                                    style={{ marginLeft: 8, width: 130, height: 115 }}
                                    source={require('../../assets/images/4.png')}
                                />
                            </View>
                        </TouchableOpacity>

                        {moveMyStuff === true && <View style={{ backgroundColor: "#f2f2f7" }}>
                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Yapı marketlerden veya 2.el beğendiğin bir ürünü direkt satıcıdan istediğin yere taşıyabiliriz. 💪 Senin evden çıkmana bile gerek yok. 😇</Text>
                            </View>


                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Bunun için eşyana uygun yardımcı sayısını seç. Nakliye ekibimiz eşyanı alıp istediğin yere taşısın. 📦</Text>
                            </View>

                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}> Ya da Kamyon Mini, Orta veya Büyük araçlarından birini seçip eşyalarını sen de taşıyabilirsin. 🚚</Text>
                            </View>

                        </View>
                        }

                        <TouchableOpacity onPress={() => {
                            colorHandlerTransportType3()
                            movingCheck2(true)
                            setbackgroundCheck1("#5031C2")
                            setTripServis(3);
                            moveMyOffice = true;
                            //  setmoveMyOffice(true)
                            //  setmoveMyStuff(false)
                            moveMyStuff = false;
                            // setmoveMyHouse(false)
                            moveMyHouse = false;


                            //Stages.splice(6, 1)
                        }} >
                            <View style={styles.rectangleTransportType3} >
                                <Text style={{ color: 'black', marginTop: 40, marginLeft: 20, fontStyle: 'italic', fontSize: FontSize.Large }}>{useLocale({}, "moveMyOffice")}</Text>
                                <Image
                                    style={{ marginLeft: 34, width: 130, height: 115 }}
                                    source={require('../../assets/images/5.png')}
                                />
                            </View>
                        </TouchableOpacity>





                        {moveMyOffice === true && <View style={{ backgroundColor: "#f2f2f7" }}>
                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Ofis mobilyalarını, dolap, masa, keson ve workstation gibi tüm mobilyalarını demonte ediyoruz, paketliyoruz ve yeni ofisinde montaj işlemlerini yapıyoruz. 📃</Text>
                            </View>


                            <View style={styles.rectangleForText}  >
                                <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>BOfis eşyalarını depolamak istersen, istediğin süre boyunca depolayabiliyoruz. Depolama hizmeti için anasayfadan "Depolama" hizmetini seçebilirsin. 📦</Text>
                            </View>

                        </View>
                        }

                    </ScrollView>






                    <View style={{ flexDirection: "row", marginTop: 0, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton1} onPress={() => {
                            if (state_movingCheck.movingCheck2 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError("Lütfen uygun olanı seçin")
                            }

                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 10 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>





                </ View>
            ),
            Verifyier: async () => true,
            Submit: async () => true

        },
        { // 2 the address
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (

                // <View style={[
                //     styles.background, 
                //     styles.flex1,

                // ]}>
                //     <ScrollView> 



                //     <View
                //         style={{
                //             // borderColor:"#C9C9C9",
                //             // backgroundColor:'#ffff',
                //             borderBottomColor: '#C9C9C9',
                //             borderBottomWidth: 1,
                //         }}
                //     />


                //     <Text style={styles.topLabel2} > {useLocale({}, "InـoutOfCityLabel3")}</Text>
                //     <Text style={{ marginLeft: 20, color: '#919191' }} > {useLocale({}, 'FromWhere')}</Text>

                //     <View style={{ margin: 20, marginTop: 5, marginBottom: 0, backgroundColor:'#f2f2f7', }}>

                //         <DropDownPicker
                //             onPress={() => {
                //                 if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                //                     if (valueRegin && valueRegin2 !== null) {
                //                         setbackgroundCheck2('#5031C2')
                //                     }
                //                 }
                //             }}
                //             style={{ borderColor: '#919191', backgroundColor: '#F6F6F6' }}
                //             open={openRegin}
                //             onOpen={onCityOpen}
                //             value={valueRegin}
                //             items={itemsRegion}
                //             setOpen={setOpenRegin}
                //             setValue={setValueRegin}
                //             setItems={setItemsRegin}
                //             placeholder={useLocale({}, ("city"))}
                //         />

                //         <TextInput
                //             style={{ marginTop: 10 }}
                //             label={useLocale({}, ('address'))}
                //             mode='outlined'

                //             value={fromWhereAddressDetails}
                //             placeholder={useLocale({}, ('addressDetails'))}
                //             onChangeText={text => {
                //                 setfromWhereAddressDetails(text)
                //                 if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                //                     if (valueRegin && valueRegin2 !== null) {
                //                         setbackgroundCheck2('#5031C2')
                //                     }
                //                 }
                //             }}
                //         />
                //         <Ionicons style={{ marginLeft: 160, marginTop: 10 }} name="ios-arrow-down-circle-outline" size={FontSize.xxxxxxxxxLarge} color='#5031C2' />

                //     </View>


                //     <Text style={{ marginLeft: 20, color: '#919191' }} > {useLocale({}, 'toWhere')}</Text>

                //     <View style={{ margin: 20, marginTop: 5,backgroundColor:'#f2f2f7', }}>

                //         <DropDownPicker
                //             onPress={() => {
                //                 if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                //                     if (valueRegin && valueRegin2 !== null) {
                //                         setbackgroundCheck2('#5031C2')
                //                     }
                //                 }
                //             }}
                //             style={{ borderColor: '#919191', backgroundColor: '#F6F6F6' }}
                //             open={openRegin2}
                //             onOpen={onCityOpen}
                //             value={valueRegin2}
                //             items={itemsRegion}
                //             setOpen={setOpenRegin2}
                //             setValue={setValueRegin2}
                //             setItems={setItemsRegin}
                //             placeholder={useLocale({}, ("city"))}
                //         />


                //         <TextInput
                //             style={{ marginTop: 10 }}
                //             label={useLocale({}, ('address'))}
                //             mode='outlined'
                //             value={toWhereAddressDetails}
                //             placeholder={useLocale({}, ('addressDetails'))}
                //             onChangeText={text => {
                //                 settoWhereAddressDetails(text)
                //                 if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                //                     if (valueRegin && valueRegin2 !== null) {
                //                         setbackgroundCheck2('#5031C2')
                //                     }
                //                 }

                //             }}
                //         />

                //     </View>

                //     </ScrollView>


                //     <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: "#F8F8FA" }}>

                //         <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                //             <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                //         </TouchableOpacity>


                //         <TouchableOpacity style={styles.commandButton2} onPress={() => {

                //             if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                //                 if (valueRegin && valueRegin2 !== null) {
                //                     if (moveMyOffice === true) {
                //                         doubleNextHundller()
                //                     } else {
                //                         nextHundller()

                //                     }
                //                 }
                //             }


                //         }} >
                //             <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                //             <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                //         </TouchableOpacity>
                //     </View>



                // </ View>



                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <MapView
                            ref={mapRef}
                            style={StyleSheet.absoluteFill}
                            initialRegion={pickupCords}
                        >
                            <Marker
                                coordinate={pickupCords}
                                image={imagesPath.icCurLoc}
                            />
                            <Marker
                                coordinate={destinationCords}
                                image={imagesPath.purpleMarke}

                            />


                            <MapViewDirections
                                lineDashPattern={[0]}
                                origin={pickupCords}
                                destination={destinationCords}
                                apikey={GOOGLE_MAP_KEY}
                                strokeWidth={3}
                                strokeColor="#f0f"
                                optimizeWaypoints={true}
                                onReady={result => {

                                    fetchDistance(result.distance);
                                    mapRef.current.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: 30,
                                            bottom: 30,
                                            left: 30,
                                            top: 10,
                                        }
                                    })
                                }}

                            />
                        </MapView>
                    </View>
                    <View style={styles.bottomCard}>
                        <Text> {useLocale({}, ("WhereAreYouGoingTo"))}</Text>
                        <TouchableOpacity
                            onPress={onPressLocation}
                            style={styles.inpuStyle}

                        >
                            <Text>{useLocale({}, ("ChooseYourLocation"))} </Text>
                        </TouchableOpacity>
                    </View>







                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: "#ffff" }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton2} onPress={() => {

                            // if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                            // if (valueRegin && valueRegin2 !== null) {
                            if (addresCheck == true) {

                                if (moveMyOffice === true) {
                                    doubleNextHundller()
                                } else {
                                    nextHundller()

                                    // }
                                    // }
                                }
                            } else {
                                showError("Lütfen konumunuzu seçin")
                            }


                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>


                </View>




            ),
            Verifyier: async () => true,
            Submit: async () => true


        },
        { // 3 kamyonlar and Houses size
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (

                <View style={[
                    styles.background,
                    styles.flex1,
                    //  { backgroundColor: "#d7d7db" }

                ]}>

                    {/* <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                            source={require('../../assets/images/logo3.png')}
                        />
                        <AntDesign style={{ marginLeft: 30, marginTop: 20 }} name="caretdown" size={15} color="black" />
                        <TouchableOpacity onPress={() => navigation.navigate("SevedLoctionsScreen")}>
                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '900' }} >  {useLocale({}, ("DeliverFrom"))} </Text>
                        </TouchableOpacity>

                    </View> */}
                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />



                    <ScrollView>
                        {moveMyStuff === true ?
                            <View style={{ backgroundColor: "#f2f2f7" }}>

                                <Text style={styles.topLabel} > {useLocale({}, "bestKamyon")}</Text>

                                <TouchableOpacity onPress={() => {
                                    colorHandlerMiniKamyon()
                                    setminiKamyon(true)
                                    setlargeKamyon(false)
                                    setXlargeKamyon(false)
                                    setbackgroundCheck4("#5031C2")
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")
                                    setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "Mini Kamyon", vehicleTypeNo: 1 }))

                                    // setVehicleType("Mini Kamyon")


                                }} >
                                    <View style={styles.rectangleMiniKamyon}  >
                                        <Text style={{ color: 'black', marginTop: 40, marginLeft: 42, fontStyle: 'italic', fontSize: FontSize.Large }}>Mini Kamyon</Text>
                                        <Image
                                            style={{ marginLeft: 45, width: 150, height: 116 }}
                                            source={require('../../assets/images/6.png')}
                                        />



                                    </View>
                                </TouchableOpacity>

                                {miniKamyon === true && <View style={[styles.background]}>
                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Fiat Doblo, Ford Connect ve benzeri boyutlarda araçlardan birini göndereceğiz. 🚐</Text>
                                    </View>


                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Bu araçlar ile tekli koltuk, çamaşır makinesi, koli gibi eşyalarından birini taşıtabilirsin. 💺</Text>
                                    </View>


                                </View>
                                }


                                <TouchableOpacity onPress={() => {
                                    colorHandlerLargeKamyon()
                                    setminiKamyon(false)
                                    setlargeKamyon(true)
                                    setXlargeKamyon(false)
                                    setbackgroundCheck4("#5031C2")
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")
                                    setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "Large Kamyon", vehicleTypeNo: 2 }))

                                    // setVehicleType("Large Kamyon")

                                }} >
                                    <View style={styles.rectangleLargeKamyon} >
                                        <Text style={{ color: 'black', marginTop: 40, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Large }}>Large Kamyon</Text>
                                        <Image
                                            style={{ marginLeft: 27, width: 168, height: 116 }}
                                            source={require('../../assets/images/7.png')}
                                        />
                                    </View>
                                </TouchableOpacity>

                                {largeKamyon === true && <View style={[styles.background]}>
                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Ford Transit, Renault Traffic gibi orta boyda araçlardan birini göndereceğiz. 🚛</Text>
                                    </View>


                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Bu araçlar ile masa, sehpa, orta boy buzdolabı, küçük 2 kişilik koltuk gibi eşyalarını taşıtabilirsin. 🛋️</Text>
                                    </View>


                                </View>
                                }
                                <TouchableOpacity onPress={() => {
                                    colorHandlerXLargeKamyon()
                                    setminiKamyon(false)
                                    setlargeKamyon(false)
                                    setXlargeKamyon(true)
                                    setbackgroundCheck4("#5031C2")
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")
                                    setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "XLarge Kamyon", vehicleTypeNo: 3 }))

                                    // setVehicleType("XLarge Kamyon")



                                }} >
                                    <View style={styles.rectangleXLargeKamyon} >
                                        <Text style={{ color: 'black', marginTop: 40, marginLeft: 20, fontStyle: 'italic', fontSize: FontSize.Large }}>XLarge Kamyon</Text>
                                        <Image
                                            style={{ marginLeft: 17, width: 180, height: 114 }}
                                            source={require('../../assets/images/8.png')}
                                        />
                                    </View>
                                </TouchableOpacity>





                                {XlargeKamyon === true && <View style={[styles.background]}>
                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Volkswagen Crafter, Ford Transit Kamyonet gibi büyük ticari kamyonetlerden birini göndereceğiz. 🚚</Text>
                                    </View>


                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Bu araçlar ile 3 kişilik koltuk, çift kişilik karyola, büyük buzdolabı gibi eşyalarını taşıtabilirsin. 🛏️</Text>
                                    </View>


                                    <View style={styles.rectangleForText}  >
                                        <Text style={{ marginTop: 10, marginLeft: 20, color: '#5c5c5c' }}>Bu araçlar ile 3i eşyalarını taşıtabilirsin. 🛏️</Text>
                                    </View>


                                </View>
                                }
                            </View>

                            :

                            <View style={[styles.background]}>
                                <Text style={styles.topLabel2} > {useLocale({}, "InـoutOfCityLabel4")}</Text>

                                <TouchableOpacity onPress={() => {
                                    colorHandlerForRooms()
                                    setrooms(rooms => ({ ...rooms, roomsText: '1 + 0', number: 1 }))
                                    // setrooms('1 + 0')
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")


                                }} >
                                    <View style={styles.rectangleForNumbers}  >
                                        <Text style={{ color: 'black', marginTop: 10, marginLeft: 50 }}>1 + 0</Text>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => {
                                    colorHandlerForRooms2()
                                    // setrooms('1 + 1')
                                    setrooms(rooms => ({ ...rooms, roomsText: '1 + 1', number: 2 }))

                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")

                                }} >
                                    <View style={styles.rectangleForNumbers2}  >
                                        <Text style={{ color: 'black', marginTop: 10, marginLeft: 50 }}>1 + 1</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    colorHandlerForRooms3()
                                    // setrooms('2 + 1')
                                    setrooms(rooms => ({ ...rooms, roomsText: '2 + 1', number: 3 }))

                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")

                                }} >
                                    <View style={styles.rectangleForNumbers3}  >
                                        <Text style={{ color: 'black', marginTop: 10, marginLeft: 50 }}>2 + 1</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    colorHandlerForRooms4()
                                    setrooms(rooms => ({ ...rooms, roomsText: '3 + 1', number: 4 }))

                                    // setrooms('3 + 1')
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")

                                }} >
                                    <View style={styles.rectangleForNumbers4}  >
                                        <Text style={{ color: 'black', marginTop: 10, marginLeft: 50 }}>3 + 1</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    // Stages.splice(6, 1);
                                    colorHandlerForRooms5();
                                    setrooms(rooms => ({ ...rooms, roomsText: 'another', number: 5 }))

                                    // setrooms('another')
                                    movingCheck4(true)
                                    setbackgroundCheck3("#5031C2")

                                }}  >
                                    <View style={styles.rectangleForNumbers5}  >
                                        <Text style={{ color: 'black', marginTop: 10, marginLeft: 45 }}>{useLocale({}, ('another'))}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>}
                    </ScrollView>




                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            if (state_movingCheck.movingCheck4 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError("Lütfen evde kaç oda olduğunu belirtin")
                            }

                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </ View>


            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        { // 4   phone
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.background,
                    styles.flex1,

                ]}>

                    <ScrollView>

                        {/* <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                            source={require('../../assets/images/logo3.png')}
                        />
                        <AntDesign style={{ marginLeft: 30, marginTop: 20 }} name="caretdown" size={15} color="black" />
                        <TouchableOpacity onPress={() => navigation.navigate("SevedLoctionsScreen")}>
                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '900' }} >  {useLocale({}, ("DeliverFrom"))} </Text>
                        </TouchableOpacity>

                    </View> */}
                        <View
                            style={{
                                // borderColor:"#C9C9C9",
                                borderBottomColor: '#C9C9C9',
                                borderBottomWidth: 1,
                            }}
                        />




                        <Text style={styles.topLabel2} > {useLocale({}, 'phoneScreen')}</Text>

                        <View style={{ marginLeft: 30, marginTop: 100, backgroundColor: '#f2f2f7' }}>
                            {/* <InputWithLabel
                                mode='outlined'
                                keyboadType='number-pad'
                                errorMessage={""}
                                label={useLocale({}, "PhoneLabel")}
                                setValue={(value: string) =>
                                    setPhone(value)
                                }
                                value={phone}
                                placeholder={"05XX-XXX-XXXX"}
                            /> */}
                            {/* <Text style={{ color: 'red' }}>{phoneErrorMessage}</Text> */}

                            <TouchableOpacity style={styles.phoneCommandButton} onPress={() => {

                            }} >
                                <Text  style={{ fontSize: 25 , fontWeight:'bold' , color:"#ffff" , paddingLeft:40}}>{phone}</Text>

                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => {
                            if (moveMyOffice === true) {
                                doubleBackHundler()
                            } else {
                                backHundller()

                            }
                        }} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton4} onPress={() => {
                            console.log("phone: " + phone)
                            if (validator.isMobilePhone(phone, 'tr-TR') == true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                                setPhoneErrorMessage("")
                                setbackgroundCheck4("#5031C2")

                            } else {
                                showError(useLocalErrorMessage({}, "invalidPhone"))

                                // setPhoneErrorMessage(useLocalErrorMessage({}, "invalidPhone"))
                            }

                            // setPhoneErrorMessage(" ");
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </ View>


            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        { // 5  DataAndTime
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.background,
                    styles.flex1,

                ]}>
                    <ScrollView>


                        <View
                            style={{
                                // borderColor:"#C9C9C9",
                                borderBottomColor: '#C9C9C9',
                                borderBottomWidth: 1,
                            }}
                        />

                        <Text style={styles.topLabel2} > {useLocale({}, 'DataAndTime')}</Text>

                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 130, backgroundColor: '#f2f2f7' }}>
                            <TimeAndDate></TimeAndDate>
                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => {
                            backHundller()
                        }} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton5} onPress={() => {
                            console.log("next moveMyHouse: " + moveMyHouse)
                            console.log("statTimeAndDate.check : " + statTimeAndDate.check)



                            if (statTimeAndDate.check === true) {
                                showSuccess("kaydedildi")
                                if (moveMyHouse === true || moveMyOffice == true) {
                                    calculatePrice(distance, numberOfHelbers);
                                    doubleNextHundller()
                                } else {
                                    nextHundller()
                                }
                            } else {
                                showError("Transferin saati ve tarihi gerekli")
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </ View>


            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        { // 6 helpers
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) => (
                <View style={[styles.background, styles.flex1]}>

                    <ScrollView>
                        <View
                            style={{
                                // borderColor:"#C9C9C9",
                                borderBottomColor: '#C9C9C9',
                                borderBottomWidth: 1,
                            }}
                        />


                        <Text style={styles.topLabel2}  > {useLocale({}, 'detailsOfItemsHeader')}</Text>

                        <TextInput
                            style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}
                            label={useLocale({}, ('Details'))}
                            mode='outlined'
                            multiline={true}
                            value={itemsDetails}
                            placeholder={useLocale({}, ('detailsOfItems'))}
                            onChangeText={text => {
                                setbackgroundCheck6('#5031C2')
                                setitemsDetails(text)
                            }}
                        />

                        <Text style={{
                            marginTop: 10,
                            marginLeft: 100,
                            paddingRight: 45,
                            fontSize: 20,
                            color: 'black'
                        }} > {useLocale({}, 'AssistantService')}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 90, backgroundColor: '#f2f2f7' }}>
                            <TouchableOpacity onPress={() => {
                                // increaseNumberOfHelbers(1)
                                setnumberOfHelbers(numberOfHelbers + 1)

                            }}>
                                <View style={[styles.circle]} >
                                    <AntDesign style={{ marginLeft: 10, marginTop: 9 }} name="plus" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#5031C2', marginLeft: 30, marginRight: 30 }} >{numberOfHelbers}</Text>
                            <TouchableOpacity onPress={() => {
                                if (numberOfHelbers > 0) {
                                    // decreaseNumberOfHelbers(1)
                                    setnumberOfHelbers(numberOfHelbers - 1)
                                }
                            }}>
                                <View style={styles.circle} >
                                    <AntDesign style={{ marginLeft: 10, marginTop: 9 }} name="minus" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton6} onPress={() => {
                            if (itemsDetails != "") {
                                showSuccess("kaydedildi")
                                calculatePrice(distance, numberOfHelbers);
                                nextHundller()
                            } else {
                                showError("Ayrıntılar gerekli")
                            }
                        }}>
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </View>


            ),
            Verifyier: async () => true,
            Submit: async () => true


        },
        { // 7 price
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.background,
                    styles.flex1,

                ]}>
                    <ScrollView>


                        {/* <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                            source={require('../../assets/images/logo3.png')}
                        />
                        <AntDesign style={{ marginLeft: 30, marginTop: 20 }} name="caretdown" size={15} color="black" />
                        <TouchableOpacity onPress={() => navigation.navigate("SevedLoctionsScreen")}>
                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '900' }} >  {useLocale({}, ("DeliverFrom"))} </Text>
                        </TouchableOpacity>

                    </View> */}
                        <View
                            style={{
                                // borderColor:"#C9C9C9",
                                borderBottomColor: '#C9C9C9',
                                borderBottomWidth: 1,
                            }}
                        />

                        <Text style={styles.topLabel} > {useLocale({}, 'rightOffer')}</Text>

                        <TouchableOpacity onPress={() => {
                            colorHandlerPrice()
                            movingCheck7(true)
                            setbackgroundCheck7("#5031C2")

                        }} >
                            {moveMyHouse === true ?
                                <View style={styles.price}  >
                                    <View style={{ flexDirection: 'row', backgroundColor: colorOfbackGroundPrice, margin: 3 }}>
                                        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, fontWeight: 'bold' }}>{rooms.roomsText} Ev</Text>
                                        <AntDesign style={{ marginLeft: 160, marginTop: 15, color: '#5031C2' }} name="CodeSandbox" size={FontSize.xxxxxxxxLarge} color="black" />
                                    </View>

                                    <Text style={{ marginLeft: 20, marginRight: 10, color: '#6b6b6b' }}>  Bu miktar, teslim alma yeri ile varış yeri arasındaki mesafe, evin büyüklüğü ve yardım eden kişi sayısı esas alınarak hesaplanmıştır. </Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#5031C2', marginLeft: 20, marginTop: 20 }}> {price}TL </Text>
                                </View>
                                :
                                <View style={styles.price}  >
                                    <View style={{ flexDirection: 'row', backgroundColor: colorOfbackGroundPrice, margin: 3 }}>
                                        <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, fontWeight: 'bold' }}>{rooms.roomsText}</Text>
                                        <AntDesign style={{ marginLeft: 0, marginTop: 15, color: '#5031C2' }} name="CodeSandbox" size={FontSize.xxxxxxxxLarge} color="black" />
                                    </View>

                                    <Text style={{ marginLeft: 20, marginRight: 10, color: '#6b6b6b' }}>Bu miktar, teslim alma yeri ile varış yeri arasındaki mesafe, tırın büyüklüğü ve yardım eden kişi sayısı esas alınarak hesaplanmıştır.    </Text>
                                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#5031C2', marginLeft: 20, marginTop: 20 }}> {price}TL </Text>
                                </View>
                            }

                        </TouchableOpacity>





                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => {
                            console.log("back moveMyHouse: " + moveMyHouse)
                            if (moveMyHouse === true) {
                                doubleBackHundler()
                            } else {
                                backHundller()

                            }
                        }} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton7} onPress={() => {
                            if (state_movingCheck.movingCheck7 == true) {
                                showSuccess("kaydedildi");
                                nextHundller()
                            } else {
                                showError("Lütfen fiyata tıklayarak kabul edin")
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>


                </ View>


            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        { // 8
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.background,
                    styles.flex1,

                ]}>

                    {/* 
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                            source={require('../../assets/images/logo3.png')}
                        />
                        <AntDesign style={{ marginLeft: 30, marginTop: 20 }} name="caretdown" size={15} color="black" />
                        <TouchableOpacity onPress={() => navigation.navigate("SevedLoctionsScreen")}>
                            <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '900' }} >  {useLocale({}, ("DeliverFrom"))} </Text>
                        </TouchableOpacity>

                    </View> */}
                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />



                    <ScrollView>


                        <Text style={styles.topLabel} > {useLocale({}, 'shippingInformation')}</Text>


                        <Card style={{ marginLeft: 20, marginRight: 20 }}>


                            <View style={{ marginLeft: 20, marginTop: 10, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'service')}</Text>
                                {moveMyHouse === true &&
                                    <Text style={{ color: '#757474', marginLeft: 3 }}  >{useLocale({}, ('movingHouse'))}  </Text>
                                }
                                {moveMyStuff === true &&
                                    <Text style={{ color: '#757474' }}  > {useLocale({}, ('movingStuff'))}
                                    </Text>
                                }
                                {moveMyOffice === true &&
                                    <Text style={{ color: '#757474' }}  > {useLocale({}, ('movingOffice'))}    </Text>
                                }

                            </View>

                            {moveMyHouse === true &&
                                <View style={{ marginLeft: 20, marginTop: 10, backgroundColor: '#ffff' }}>
                                    <Text style={{ color: 'black' }} > {useLocale({}, 'HouseType')}</Text>
                                    <Text style={{ color: '#757474' }}  > {rooms.roomsText} </Text>
                                </View>
                            }
                            {moveMyStuff === true &&
                                <View style={{ marginLeft: 20, marginTop: 10, backgroundColor: '#ffff' }}>
                                    <Text style={{ color: 'black' }} > {useLocale({}, 'VehicleType')}</Text>
                                    <Text style={{ color: '#757474' }}  > {vehicleType.vehicleTypeText} </Text>
                                </View>
                            }




                            <View style={{ marginLeft: 20, marginTop: 10, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'time')}</Text>
                                <Text style={{ color: '#757474' }}  > {statTimeAndDate.time} </Text>
                            </View>

                            <View style={{ marginLeft: 20, marginTop: 10, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'date')}</Text>
                                <Text style={{ color: '#757474' }}  > {statTimeAndDate.date}  </Text>
                            </View>



                            <View style={{ marginTop: 10, marginLeft: 20, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'FromWhere')}</Text>
                                <Text style={{ color: '#757474' }}  > {pickupCords.formatted_address} </Text>
                            </View>

                            <View style={{ marginTop: 10, marginLeft: 20, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'toWhere')}</Text>
                                <Text style={{ color: '#757474' }}  > {destinationCords.formatted_address}</Text>
                            </View>


                            <View style={{ marginTop: 10, marginLeft: 20, marginBottom: 10, backgroundColor: '#ffff' }}>
                                <Text style={{ color: 'black' }} > {useLocale({}, 'PhoneLabel')}</Text>
                                <Text style={{ color: '#757474' }}  > {phone}</Text>
                            </View>


                        </Card>


                    </ScrollView>





                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#f2f2f7' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton8} onPress={() => {
                            // TripServics()
                            AddTrip()
                            nextHundller()
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>






                </ View>


            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        { // 9
            Component: (nextHundller, doubleNextHundller, doubleBackHundler, backHundller, finshHundller) =>
            (

                <View style={[
                    styles.flex1,
                    styles.background

                ]}>
                    <ScrollView style={{ backgroundColor: '#f2f2f7' }}>

                        <ModalPoup
                            visible={visible}>
                            <ScrollView >

                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.header}>
                                        <TouchableOpacity onPress={() => {
                                            setVisible(false)
                                            // navigation.navigate(navigationPage)

                                        }}>
                                            <Image
                                                source={require('../../assets/images/x.png')}
                                                style={{ height: 30, width: 30 }}

                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../../assets/images/instructions.png')}
                                        style={{ height: 150, width: 150, marginVertical: 10 }}
                                    />
                                </View>

                                <Text style={{ marginVertical: 30, fontSize: 10 }}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </Text>
                            </ScrollView>
                        </ModalPoup>


                        <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 30, color: 'black' }}>{useLocale({}, 'PayCash1')}</Text>

                        {moveMyOffice || moveMyHouse && (
                            <View style={{ backgroundColor: "#f2f2f7" }} >
                                <Text style={{ marginLeft: 20, fontSize: 17, marginTop: 60, color: 'black' }}>{useLocale({}, 'PayCash2')}</Text>
                                <View style={{ marginLeft: 20, marginRight: 20, backgroundColor: '#f2f2f7' }}>
                                    <TextInput
                                        label={useLocale({}, ('yourNote'))}
                                        mode='outlined'
                                        multiline={true}
                                        value={itemsDetails}
                                        placeholder={useLocale({}, ('yourNote'))}
                                        onChangeText={text => setitemsDetails(text)}
                                    />
                                </View>
                            </View>
                        )}


                        <View style={{ alighnItem: 'center', flexDirection: 'row', paddingTop: 100, backgroundColor: "#f2f2f7" }}>
                            <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#f2f2f7' }}>
                                {/*Contract  */}
                                <TouchableOpacity onPress={() => {
                                    colorHandlerContract()

                                    if (state_movingCheck.movingCheck9 == false) {
                                        movingCheck9(true)
                                        setbackgroundCheck9('#5031C2')
                                    } else {
                                        movingCheck9(false)
                                        setbackgroundCheck9('#D3D3D3')
                                    }

                                }} >
                                    <View style={styles.contract}  >
                                        <FontAwesome style={{ marginTop: 3, marginLeft: 2 }} name={"check"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                                    </View>
                                </TouchableOpacity>


                            </View>

                            <Text onPress={() => setVisible(true)} style={{ paddingTop: 70, marginLeft: 10, color: 'black', fontSize: 15, paddingRight: 15 }}>Kullanıcı Sözleşmesini ,Gizlilik Politikası'nı ve kişisel verilerimin işlenmesine ilişkin Aydınlatma ve Rıza Metni’ni okudum ve kabul ediyorum .</Text>

                        </View>


                        {/* </ScrollView> */}

                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 15, backgroundColor: '#f2f2f7' }}>
                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton9} onPress={() => {
                            //SmsCheck()
                            // AddTrip()
                            navigation.navigate('ConfirmationPhoneCodeScreen', {
                                navigationPage: 'MainScreen'
                            })

                            //----------------
                            //final edit
                            dateAndTimeCheckAction(false)
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 10, marginRight: 10 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>
                    </View>


                </ View>






            ),
            Verifyier: async () => true,
            Submit: async () => true
        }
    ];



    return (

        <View style={[styles.flex1]}>

            <View style={{ flexDirection: 'row', backgroundColor: '#ffff' }}>
                <Image
                    style={{ marginLeft: 15, marginBottom: 15, marginTop: 15, width: 140, height: 34 }}
                    source={require('../../assets/images/logo3.png')}
                />
                {/* <AntDesign style={{ marginLeft: 30, marginTop: 20 }} name="caretdown" size={15} color="black" />
                <TouchableOpacity onPress={() => navigation.navigate('SevedLoctionsScreen')}>
                    <Text style={{ marginTop: 16, fontSize: 18, fontWeight: '900', color: 'black' }} >  {useLocale({}, ("DeliverFrom"))} </Text>
                </TouchableOpacity> */}

            </View>


            <StagesLayoutForWithoutAccount Stages={Stages} onFinish={onSuccess} />




        </View>

    )



}


