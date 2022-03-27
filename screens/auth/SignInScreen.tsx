import { StackNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Dimensions } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { ScreenContext } from '../../contexts/ScreenContext';
import { useLocale } from '../../hooks/useLocale';
import { FontSize } from '../../constants/FontSize';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { checkEmailService } from '../../services/apiCalls/checkEmailService';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import IconButton from '../../components/customComponent/IconButton';
import StagesLayout from '../../components/layouts/StagesLayout';
import { checkPhoneService } from '../../services/apiCalls/checkPhoneService';
import { signInService } from '../../services/apiCalls/signInService';

import { signIn } from '../../services/navigation/signIn';
import { getAccessTokenService } from '../../services/storageServices/getAccessTokenService';
import { saveAccessTokenService } from '../../services/storageServices/saveAccessTokenService';
import { saveRefreshTokenService } from '../../services/storageServices/saveRefreshTokenService';
import { tokenSignIn } from '../../services/navigation/tokenSignIn';
import Loading from '../../components/Loading';
import TextButton from '../../components/themed/TextButton';
import FlatButton from '../../components/FlatButton';
import { useThemeColor } from '../../hooks/useThemeColor';
import Layout from '../../constants/Layout';
import BouncingPreloader from 'react-native-bouncing-preloader';
import { showError } from '../helper/helperFunction';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../state/action-creators';
import { useDispatch } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';



var Spinner = require('react-native-spinkit');
export default function SignInScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {
    const [buttonWidth, setbuttonWidth] = useState(Dimensions.get('window').height / 2);




    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",

        },
        titleText:
        {
            fontSize: FontSize.Large,
            paddingTop: 30,
            paddingRight: 125,
            color: 'black',


        }, button: {
            paddingBottom: 110,
            paddingLeft: 30,
            paddingRight: 30,

            //  width:

        }, newUser: {
            paddingBottom: 10,
            marginLeft: 100,
            color: "#736e6e",
            fontWeight: "bold"


        },
        topLabel: {
            //paddingBottom: 40,
            marginBottom: 80,
            paddingRight: 20,
            marginLeft: 20,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        }, topLabel2: {
            //paddingBottom: 40,
            marginBottom: 80,
            marginLeft: 35,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        }, topLabel4: {
            //paddingBottom: 40,
            marginBottom: 80,
            marginLeft: 20,
            fontSize: 20,
            color: useThemeColor({}, "gri")


        },
        center: {
            width: '100%',
            //  flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 30,
            paddingTop: 30
        },
        center2: {
            width: '100%',
            //  flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 3,
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
        }, background: {
            backgroundColor: '#ffff',
        },
        commandButtonSmall: {
            padding: 15,
            marginLeft: 10,
            paddingRight: 20,
            marginRight: 5,
            marginBottom: 0,
            borderRadius: 12,
            backgroundColor: '#39A1A3',
            alignItems: 'center',

            flexDirection: "row",
        }, commandButton3: {
            padding: 15,
            marginLeft: 8,
            marginRight: 30,
            marginBottom: 0,
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
        }, SignOut: {
            paddingBottom: 10,
            marginLeft: 90,
            color: "#39A1A3",
            fontWeight: "bold"

        }
    })

    const [email, setEmail] = useState<string>('');
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>("");
    const [passwardErrorMessage, setPasswardErrorMessage] = useState<string>('');
    const [passward, setPassward] = useState<string>('');




    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [loaded, setLoaded] = useState(false);



    const checkEmail = async () => {

        console.log("test checkEmail");

        let result: boolean = true;
        if (validator.isEmail(email) == false) {
            // setEmailErrorMessage(useLocalErrorMessage({}, "invalidEmail"))
            showError(useLocalErrorMessage({}, "invalidEmail"));
            // result = false;
            return false;

        }

        // setEmailErrorMessage("");




        let responseEmail = await checkEmailService(email);

        if (responseEmail.data.exists == false) {
            // setEmailErrorMessage(useLocalErrorMessage({}, "emailDoesNotExist"))
            showError(useLocalErrorMessage({}, "emailDoesNotExist"));

            return false;
        }
        return result;
    }


    const checkPhone = async (): Promise<boolean> => {

        console.log("test checkPhone ");
        let result: boolean = true;
        if (validator.isMobilePhone(phone, 'tr-TR') == false) {
            showError(useLocalErrorMessage({}, "invalidPhone"));
            return false;

        }

        let responsePhone = await checkPhoneService(phone);

        if (responsePhone.data.exists == false) {
            // setPhoneErrorMessage(useLocalErrorMessage({}, "phoneDoesNotExist"))
            showError(useLocalErrorMessage({}, "phoneDoesNotExist"));
            return false;
        }

        console.log(responsePhone.data.exists);
        return result;


    }


    const checkPassward = async (): Promise<boolean> => {



        console.log("test signIn");

        let result: boolean = true;

        if (passward !== "") {

            let response = await signInService(
                email,
                phone,
                passward
            )


            if (response.success == true) {
                await saveAccessTokenService(response.data.accessToken);
                await saveRefreshTokenService(response.data.refreshToken);


                return true
            } else {
                showError("Şifre geçersiz")
            }


        } else {
            showError("Şifre geçersiz")
        }




        return false;
    }



    const onSuccess = async () => {

        await signIn();

        try {
            await AsyncStorage.setItem("phone", phone)
        } catch (error) {
            console.log(error);
        }

    }


    const manageTokenSignIn = async (success: boolean) => {
        // to open the signIn page without direct login
        //  setLoaded(true)
        // return;

        if (success)
            signIn();
        else
            setLoaded(true)
    }

   
    useEffect(() => {

        const updateLayout = () => {
            // let data:any;

            ScreenOrientation.getOrientationAsync().then((data) => {
                // console.log(data)
                // LANDSCAPE_LEFT = 3,   LANDSCAPE_RIGHT = 4,
                if (data === 4 || data === 3) {
                    setbuttonWidth(Dimensions.get('window').width / 1.5);
                    // console.log("LANDSCAPE");

                } else {
                    setbuttonWidth(Dimensions.get('window').height / 2)
                }
            });

        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })
    


    const Stages: Stage[] = [
        {//1 phone
            Component: (nextHundller, backHundller, finshHundller) => (
                <View style={[
                    styles.background,
                    styles.flex1,
                    styles.center
                ]}>
                    <ScrollView>
                        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                            <Text style={styles.topLabel2} > {useLocale({}, "phoneScreen")}</Text>

                            <View style={[styles.center2, styles.background]}>
                                <InputWithLabel
                                    keyboadType='number-pad'
                                    errorMessage={""}
                                    label={useLocale({}, "PhoneLabel")}
                                    setValue={(value: string) => setPhone(value.trim())}
                                    value={phone.trim()}
                                    mode={"outlined"}
                                    placeholder={useLocale({}, "PhoneLabel")}
                                />
                            </View>
                            <Text style={{ color: 'red', fontSize: FontSize.Small }}>{phoneErrorMessage}</Text>


                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.newUser}>{useLocale({}, "newUser")}</Text>

                                <TouchableOpacity>
                                    <Text style={styles.SignOut} onPress={() => {
                                        navigation.navigate('SignUpScreen')
                                    }}>{useLocale({}, "goToSignUp")}</Text>
                                </TouchableOpacity>
                            </View>

                        </KeyboardAvoidingView>

                    </ScrollView>


                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => navigation.navigate("SecondScreen")} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            nextHundller()

                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>
                    </View>
                </ View >
            ),
            Verifyier: checkPhone,
            Submit: async () => true

        },
        {//2 password
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.background,
                    styles.flex1,
                    styles.center
                ]}>

                    <ScrollView>

                        <Text style={styles.topLabel4} > {useLocale({}, "passwordScreen")}</Text>

                        <View style={[styles.center, styles.background]}>
                            <InputWithLabel
                                errorMessage={""}
                                label={useLocale({}, "PasswadLabel")}
                                setValue={(value: string) => setPassward(value.trim())}
                                value={passward.trim()}
                                mode={"outlined"}
                                secureTextEntry={true}

                                placeholder={useLocale({}, "PasswadLabel")}
                            />
                            <Text style={{ color: 'red', fontSize: FontSize.Small }}>{passwardErrorMessage}</Text>


                        </View>

                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.newUser}>{useLocale({}, "newUser")}</Text>

                            <TouchableOpacity>
                                <Text style={styles.SignOut} onPress={() => {
                                    navigation.navigate('SignUpScreen')
                                }}>{useLocale({}, "goToSignUp")}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>



                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton3} onPress={() => {
                            finshHundller()

                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>

                        </TouchableOpacity>
                    </View>
                </View>


            ),
            Verifyier: async () => true,
            Submit: checkPassward
        }

    ];




    //TODO:
    if (loaded == false) {
        return <Loading onStart={tokenSignIn} onFinish={manageTokenSignIn} />
    } else {
        return (
            <View style={[
                styles.background,
                styles.container,
                styles.flex1
            ]}>
                <View style={[styles.background]}>
                    <Text style={styles.titleText}>{useLocale({}, "signingInHeader")}</Text>
                </View>


                <StagesLayout Stages={Stages} onFinish={onSuccess} />

            </View>
        )
    }


}


