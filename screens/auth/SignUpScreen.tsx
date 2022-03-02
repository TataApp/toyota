import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Button, StyleSheet, Image } from 'react-native'
import StagesLayout from '../../components/layouts/StagesLayout';
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { FontSize } from '../../constants/FontSize';
import { useLocale } from '../../hooks/useLocale';
import { checkEmailService } from '../../services/apiCalls/checkEmailService';
import { checkPhoneService } from '../../services/apiCalls/checkPhoneService';
import { signUpService } from '../../services/apiCalls/signUpService';
import { TextInput } from '../../components/themed/TextInput';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import IconButton from '../../components/customComponent/IconButton';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import Locale from '../../constants/Locale';
import { useThemeColor } from '../../hooks/useThemeColor';
import FlatButton from '../../components/FlatButton';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showError, showSuccess } from '../helper/helperFunction';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import AddressPickup from '../../components/AddressPickup'

export default function SignUpScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {
    const [colorOfTextMiniKamyon, setcolorOfTextMiniKamyon] = useState('black');
    const [colorOfTextLargeKamyon, setcolorOfTextLargeKamyon] = useState('black');
    const [colorOfTextXLargeKamyon, setcolorOfTextXLargeKamyon] = useState('black');

    const [colorOfbackGroundMiniKamyon, setcolorOfbackGroundMiniKamyon] = useState('#ffff');
    const [colorOfbackGroundLargeKamyon, setcolorOfbackGroundLargeKamyon] = useState('#ffff');
    const [colorOfbackGroundXLargeKamyon, setcolorOfbackGroundXLargeKamyon] = useState('#ffff');

    const [miniKamyon, setminiKamyon] = useState(false);
    const [largeKamyon, setlargeKamyon] = useState(false);
    const [XlargeKamyon, setXlargeKamyon] = useState(false);

    const [movingCheck4, setmovingCheck4] = useState(false);

    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",

        },
        commandButtonSmall: {
            padding: 15,
            marginLeft: 10,
            paddingRight: 20,
            marginRight: 5,
            marginBottom: 10,
            borderRadius: 12,
            backgroundColor: '#39A1A3',
            alignItems: 'center',

            flexDirection: "row",
        }, background: {
            backgroundColor: '#ffff',
        },
        titleText:
        {
            fontSize: FontSize.Large,
            paddingTop: 30,
            paddingRight: 105,


        }, rectangleLargeKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: "#39A1A3",
            borderWidth: 1,
            borderTopRightRadius: 30,
            borderRadius: 20,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundLargeKamyon


        }, commandButton3: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 10,
            borderRadius: 12,
            borderColor: '#39A1A3',
            borderWidth: 1,
            backgroundColor: "#39A1A3",
            alignItems: 'center',

            flexDirection: "row",
        }, panelButtonTitle: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 35,
            paddingRight: 60,
            paddingLeft: 60
        },
        center: {
            width: '100%',
            flex: 1,
            // alignItems: "center",
            //justifyContent: "center",
            paddingLeft: 30,
            // paddingBottom:

        },
        center1: {
            width: '100%',
            //  flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 30,
            paddingTop: 30
        },
        centerLast1: {
            width: '100%',
            //  flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 0,
            paddingTop: 30
        }, rectangleMiniKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: "#39A1A3",
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundMiniKamyon


        }, rectangleForText: {
            flexGrow: 1,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 5,
            paddingBottom: 20,
            backgroundColor: '#f2f2f7'


        },
        button: {
            paddingBottom: 170,
            paddingLeft: 140
        },
        button1: {
            paddingBottom: 110,
            paddingLeft: 40,
            paddingRight: 40,

            //  width:

        },
        topLabel: {
            //paddingBottom: 40,
            marginBottom: 40,
            marginLeft: 25,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        },
        topLabelLast: {
            //paddingBottom: 40,
            marginBottom: 15,
            marginLeft: 25,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        }, topLabelPlateNo: {
            //paddingBottom: 40,
            marginBottom: 50,
            marginTop: 20,
            marginLeft: 25,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        },
        flex1: {
            flex: 1,
        },
        rowFlex: {
            flexDirection: 'row'
        },
        spaceBetween: {
            // justifyContent: 'space-between'
            marginLeft: 160,
            // paddingBottom: 10,

        }, newUser: {
            paddingBottom: 10,
            marginLeft: 90,
            color: "#736e6e",
            fontWeight: "bold"

        }, newUserLast: {
            paddingBottom: 10,
            marginLeft: 100,
            color: "#736e6e",
            fontWeight: "bold"

        },
        errorText: {
            fontSize: FontSize.Small,
            color: useThemeColor({}, "error"),
            marginRight: 25
            //paddingBottom: 30

        },
        circle: {
            width: 50,
            height: 50,
            borderRadius: 100 / 2,
            borderColor: '#EBEBEB',
            borderWidth: 3,
            margin: 5,
            backgroundColor: useThemeColor({}, "green1"),
            justifyContent: "center",
            alignItems: "center",


        }, rectangleXLargeKamyon: {
            width: 167 * 2,
            height: 115,
            borderColor: "#39A1A3",
            borderWidth: 1,
            borderRadius: 20,
            borderTopRightRadius: 30,
            marginBottom: 10,
            marginLeft: 25,
            flexDirection: 'row',
            backgroundColor: colorOfbackGroundXLargeKamyon


        }

    })

    const [email, setEmail] = useState<string>('');
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>('');
    const [passwardErrorMessage, setPasswardErrorMessage] = useState<string>('');
    const [passward, setPassward] = useState<string>('');
    const [confirmPassward, setConfirmPassward] = useState<string>('');
    const [confirmPasswardErrorMessage, setConfirmPasswardErrorMessage] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    //const [currentStage, setCurrentStage] = useState<number>(0);
    const [tripScrren, settripScrren] = useState(false)
    const [openRegin, setOpenRegin] = useState(false);
    const [openRegin2, setOpenRegin2] = useState(false);
    const [valueRegin, setValueRegin] = useState(null);
    const [valueRegin2, setValueRegin2] = useState(null);
    const [itemsRegion, setItemsRegin,] = useState([
        { label: 'Sakarya', value: 1 },
        { label: 'Istanbul', value: 2 },
        { label: 'ttt', value: 3 },
    ]);
    const [vehicleType, setVehicleType] = useState({
        vehicleTypeText: "",
        vehicleTypeNo: 0
    });

    const [state, setState] = useState({
        pickupCords: {},
        destinationCords: {},
        // formatted_address: ""

    })

    const checkEmail = async () => {

        console.log("test checkEmail");

        let result: boolean = true;
        if (validator.isEmail(email) == false) {
            // setEmailErrorMessage(useLocalErrorMessage({}, "invalidEmail"))
            showError(useLocalErrorMessage({}, "invalidEmail"))
            result = false;
        }

        setEmailErrorMessage("");

        if (result == false)
            return false;

        let responseEmail = await checkEmailService(email);
        if (responseEmail.data.exists) {
            // setEmailErrorMessage(useLocalErrorMessage({}, "emailAlreadyExist"))
            showError(useLocalErrorMessage({}, "emailAlreadyExist"))
            return false;
        }
        return result;
    }

    const colorHandlerMiniKamyon = () => {

        setcolorOfTextMiniKamyon('#39A1A3');
        setcolorOfTextLargeKamyon('black');
        setcolorOfTextXLargeKamyon('black');


    }

    const colorHandlerLargeKamyon = () => {

        setcolorOfTextMiniKamyon('black');
        setcolorOfTextLargeKamyon('#39A1A3');
        setcolorOfTextXLargeKamyon('black');

    }
    const colorHandlerXLargeKamyon = () => {

        setcolorOfTextMiniKamyon('black');
        setcolorOfTextLargeKamyon('black');
        setcolorOfTextXLargeKamyon('black');

    }

    const onCityOpen = () => {

    }
    const checkPhone = async (): Promise<boolean> => {

        console.log("test checkPhone");
        if (validator.isMobilePhone(phone, 'tr-TR') == false) {
            // setPhoneErrorMessage(useLocalErrorMessage({}, "invalidPhone"))
            showError(useLocalErrorMessage({}, "invalidPhone"));
            return false;
        }
        // return true

        let responsePhone = await checkPhoneService(phone);

        console.log(responsePhone.data.exists);
        if (responsePhone.data.exists) {
            showError("Numara zaten kayıtlı !")
        }
        return responsePhone.data.exists == false;

    }

    const signUp = async (): Promise<boolean> => {


        if (validator.equals(passward, confirmPassward) == false) {
            // setConfirmPasswardErrorMessage(useLocalErrorMessage({}, "confirmPasswardDoesntMatch"))
            showError(useLocalErrorMessage({}, "confirmPasswardDoesntMatch"));
            return false;
        }
        setConfirmPasswardErrorMessage("");

        if (validator.isLength(passward, { min: 8, max: 20 }) == false) {
            // setPasswardErrorMessage(useLocalErrorMessage({}, "passwardLength"))
            showError(useLocalErrorMessage({}, "passwardLength"));
            return false;
        }


        setPasswardErrorMessage("");

        console.log("name with trim: " + name.trim() + "jjjjjjj");

        let response = await signUpService(name, email, phone, passward);


        return response.success;
    }


    const fetchAddresCords = (lat: any, lng: any, cityText: any) => {
        console.log("lattude: ", lat)
        console.log('longtude: ', lng)
        console.log('cityText: ', cityText)


        setState({
            ...state,
            pickupCords: {
                latitude: lat,
                longitude: lng,
                formatted_address: cityText,
            }
        })

    }

    const onSuccess = () => {
        console.log("onSuccess")
        navigation.pop();
    }

    //   <Text style={styles.topLabel} > {useLocale({}, "nameScreenSignUp")}</Text>

    const Stages: Stage[] = [
        {//1 name
            Component: (nextHundller, backHundller, finshHundller) => (

                <View style={[
                    styles.flex1,
                    // styles.center
                ]}>

                    <Text style={styles.topLabel} > {useLocale({}, "nameScreenSignUp")}</Text>


                    <ScrollView>
                        <View style={styles.center1}>
                            <InputWithLabel
                                errorMessage={emailErrorMessage}
                                label={useLocale({}, "namelLabel")}
                                setValue={(value: string) => setName(value.trim())}
                                value={name.trim()}
                                placeholder={useLocale({}, "namelLabel")}
                                mode={"outlined"}
                            />
                        </View>


                       

                            {/* <IconButton size={FontSize.xxxxxxxxxLarge} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} /> */}
                            {/* <TouchableOpacity style={styles.circle} onPress={() => {
                                if (name !== "") {
                                    nextHundller
                                } else {
                                    showError("Güzel adını bilmek istiyoruz")
                                }
                            }}>
                                <FontAwesome name="chevron-left" size={35} color="#ffff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.circle} onPress={() => {
                                if (name !== "") {
                                    nextHundller()
                                } else {
                                    showError("Güzel adını bilmek istiyoruz")
                                }
                            }}>
                                <FontAwesome name="chevron-right" size={35} color="#ffff" />

                            </TouchableOpacity> */}

                        
                        

                        <Text style={styles.newUser}>{useLocale({}, "oldUser")}</Text>
                        <View style={styles.button1}>
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#37B8BB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>


                    </ScrollView>


                    <View style={{ flexDirection: "row", marginTop: 0, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            if (name !== "") {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {

                                showError("Güzel adını bilmek istiyoruz")
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
        {//2 phone
            Component: (nextHundller, backHundller, finshHundller) => (
                <View style={[
                    styles.flex1,
                    styles.center
                ]}>



                    <Text style={styles.topLabel} > {useLocale({}, "phoneScreenSignUp")}</Text>
                    <View>

                        <View style={styles.center1}>
                            <InputWithLabel  // phoneErrorMessage
                                errorMessage={""}
                                keyboadType='number-pad'
                                label={useLocale({}, "PhoneLabel")}
                                setValue={(value: string) => setPhone(value.trim())}
                                value={phone.trim()}
                                placeholder={useLocale({}, "PhoneLabel")}
                                mode={"outlined"}

                            />
                            <Text style={{ color: 'red' }}>{phoneErrorMessage}</Text>


                        </View>


                        <View style={[
                            styles.rowFlex,
                            //    styles.spaceBetween,
                            { marginLeft: 130 },
                            //    { marginBottom: 40 },
                            // {margingTop:39}

                        ]}>
                            <IconButton size={53} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} />
                            <IconButton
                                size={53}
                                locked
                                name={useLocale({}, "direction") == "rtl" ? "chevron-circle-left" : "chevron-circle-right"}
                                onClick={nextHundller}
                            />

                        </View>

                        <Text style={styles.newUser}>{useLocale({}, "oldUser")}</Text>
                        <View style={styles.button1}>
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#37B8BB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>
                    </View>
                </ View>
            ),
            Verifyier: async () => true, //checkPhone,
            Submit: async () => true

        },
        {//3 email
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.flex1,
                    styles.center
                ]}>

                    <Text style={styles.topLabel} > {useLocale({}, "emailScreenSignUp")}</Text>


                    <View>

                        <View style={styles.center1}>
                            <InputWithLabel
                                errorMessage={""}
                                keyboadType='email-address'
                                label={useLocale({}, "emailLabel")}
                                setValue={(value: string) => setEmail(value.trim())}
                                value={email.trim()}
                                placeholder={useLocale({}, "emailLabel")}
                                mode={"outlined"}

                            />
                            <Text style={{ color: 'red' }}>{emailErrorMessage}</Text>


                        </View>


                        {/* <View style={[
                            styles.rowFlex,
                            { marginLeft: 130 },


                        ]}>
                            <IconButton size={FontSize.xxxxxxxxxLarge} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} />
                            <IconButton
                                size={FontSize.xxxxxxxxxLarge}
                                locked
                                name={useLocale({}, "direction") == "rtl" ? "chevron-circle-left" : "chevron-circle-right"}
                                onClick={nextHundller}
                            />

                        </View> */}

                        <View style={[
                            styles.rowFlex,
                            { marginLeft: 110 },
                        ]}>

                            {/* <IconButton size={FontSize.xxxxxxxxxLarge} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} /> */}
                            <TouchableOpacity style={styles.circle} onPress={() => {
                                backHundller()
                            }}>
                                <FontAwesome name="chevron-left" size={35} color="#ffff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.circle} onPress={() => {
                                settripScrren(true);
                                nextHundller()
                            }}>
                                <FontAwesome name="chevron-right" size={35} color="#ffff" />

                            </TouchableOpacity>

                        </View>

                        <Text style={styles.newUserLast}>{useLocale({}, "oldUser")}</Text>
                        <View style={styles.button1}>
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#37B8BB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>


                    </View>

                </ View>

            ),
            Verifyier: async () => true,//checkEmail,
            Submit: async () => true


        },
        {//4 type of trip
            Component: (nextHundller, backHundller, finshHundller) =>
            (

                <View style={[
                    styles.background,
                    styles.flex1,
                    //  { backgroundColor: "#d7d7db" }

                ]}>
                    <ScrollView>
                        <View style={{ backgroundColor: "#ffff" }}>

                            <Text style={styles.topLabel} > {useLocale({}, "truckTipe")}</Text>
                            <TouchableOpacity onPress={() => {
                                colorHandlerMiniKamyon()
                                setminiKamyon(true)
                                setlargeKamyon(false)
                                setXlargeKamyon(false)
                                // setbackgroundCheck4("#5031C2")
                                setmovingCheck4(true)
                                // setbackgroundCheck3("#5031C2")
                                setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "Mini Kamyon", vehicleTypeNo: 1 }))

                            }} >
                                <View style={styles.rectangleMiniKamyon}  >
                                    <Text style={{ color: colorOfTextMiniKamyon, marginTop: 40, marginLeft: 42, fontStyle: 'italic', fontSize: FontSize.Large }}>Mini Kamyon</Text>
                                    <Image
                                        style={{ marginLeft: 30, width: 150, height: 116 }}
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
                                // setbackgroundCheck4("#5031C2")
                                setmovingCheck4(true)
                                // setbackgroundCheck3("#5031C2")
                                setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "Large Kamyon", vehicleTypeNo: 2 }))
                            }} >
                                <View style={styles.rectangleLargeKamyon} >
                                    <Text style={{ color: colorOfTextLargeKamyon, marginTop: 40, marginLeft: 30, fontStyle: 'italic', fontSize: FontSize.Large }}>Large Kamyon</Text>
                                    <Image
                                        style={{ marginLeft: 29, width: 150, height: 116 }}
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
                                // setbackgroundCheck4("#5031C2")
                                setmovingCheck4(true)
                                // setbackgroundCheck3("#5031C2")
                                setVehicleType(vehicleType => ({ ...vehicleType, vehicleTypeText: "XLarge Kamyon", vehicleTypeNo: 3 }))


                            }} >
                                <View style={styles.rectangleXLargeKamyon} >
                                    <Text style={{ color: colorOfTextXLargeKamyon, marginTop: 40, marginLeft: 20, fontStyle: 'italic', fontSize: FontSize.Large }}>XLarge Kamyon</Text>
                                    <Image
                                        style={{ marginLeft: 27, width: 150, height: 116 }}
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


                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            if (movingCheck4 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError("Lütfen kamyon tipinizi seçin")
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
        {//5 Plate number
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <ScrollView style={[
                    styles.flex1,

                ]}>

                    <Text style={styles.topLabelPlateNo} > {useLocale({}, "plateNumber")}</Text>

                    <View style={styles.centerLast1}>
                        <InputWithLabel
                            errorMessage={""}
                            // label={useLocale({}, "PasswadLabel")}
                            setValue={(value: string) => setPassward(value.trim())}
                            value={passward.trim()}

                            placeholder={useLocale({}, "plateNumber")}
                            mode={"outlined"}

                        />
                        {/* <Text style={styles.errorText}>{passwardErrorMessage}</Text> */}





                    </View>

                    <View style={{ flexDirection: "row", marginTop: 280, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            if (movingCheck4 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError("Lütfen kamyon tipinizi seçin")
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>



                </ScrollView>


            ),
            Verifyier: async () => true,
            Submit: async () => true,
        },
        {//6 Adress
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <View style={{ flex: 1 }}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        style={{ backgroundColor: 'white', flex: 1, padding: 24 }}>
                        <AddressPickup
                            placheholderText={useLocale({}, ("EnterPickupLocation"))}
                            fetchAddress={fetchAddresCords}
                        />
                        <View style={{ marginBottom: 16 }} />

                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            if (movingCheck4 === true) {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError("Lütfen kamyon tipinizi seçin")
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </View>

            ),
            Verifyier: async () => true,//checkEmail,
            Submit: async () => true


        },
        {//7 password
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <ScrollView style={[
                    styles.flex1,
                    styles.center
                ]}>

                    <Text style={styles.topLabelLast} > {useLocale({}, "passwordScreenSignUp")}</Text>

                    <View style={styles.centerLast1}>
                        <InputWithLabel
                            errorMessage={""}
                            label={useLocale({}, "PasswadLabel")}
                            setValue={(value: string) => setPassward(value.trim())}
                            value={passward.trim()}
                            secureTextEntry
                            placeholder={useLocale({}, "PasswadLabel")}
                            mode={"outlined"}

                        />
                        <Text style={styles.errorText}>{passwardErrorMessage}</Text>

                        <InputWithLabel
                            errorMessage={""}
                            label={useLocale({}, "ConfirmPasswadLabel")}
                            setValue={(value: string) => setConfirmPassward(value.trim())}
                            value={confirmPassward.trim()}
                            secureTextEntry
                            placeholder={useLocale({}, "ConfirmPasswadLabel")}
                            mode={"outlined"}

                        />
                        <Text style={styles.errorText}>{confirmPasswardErrorMessage}</Text>



                        <View style={[
                            styles.rowFlex,
                            //    styles.spaceBetween
                            { marginTop: 30, marginLeft: 10 }
                        ]}>
                            <IconButton size={FontSize.xxxxxxxxxLarge} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} />
                            <IconButton size={FontSize.xxxxxxxxxLarge} locked name="check-circle" onClick={finshHundller} />
                        </View>



                    </View>

                    <Text style={[styles.newUser,]}>{useLocale({}, "oldUser")}</Text>
                    <View style={{ paddingLeft: 40, marginRight: 40 }}>
                        <FlatButton text={useLocale({}, "signInHeader")} bgrColor="#37B8BB" onPress={() => {
                            navigation.navigate("SignUpScreen")
                        }} />
                    </View>

                </ScrollView>


            ),
            Verifyier: async () => true,
            Submit: signUp
        }

    ]

    return (
        <View style={[
            styles.container,
            styles.flex1,

        ]}>

            <View >
                <Text style={styles.titleText}>{useLocale({}, "createNewAccountHeader")}</Text>
            </View>



            <StagesLayout Stages={Stages} onFinish={onSuccess} />
        </View>
    )
}


