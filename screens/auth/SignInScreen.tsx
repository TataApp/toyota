import { StackNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, KeyboardAvoidingView, Dimensions, Image, StyleSheet, StatusBar } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { ScreenContext } from '../../contexts/ScreenContext';
import { useLocale } from '../../hooks/useLocale';
import { FontSize } from '../../constants/FontSize';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { checkEmailService } from '../../services/apiCalls/checkEmailService';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import StagesLayout from '../../components/layouts/StagesLayout';
import { signInService } from '../../services/apiCalls/signInService';

import { signIn } from '../../services/navigation/signIn';
import { getAccessTokenService } from '../../services/storageServices/getAccessTokenService';
import { saveAccessTokenService } from '../../services/storageServices/saveAccessTokenService';
import { saveRefreshTokenService } from '../../services/storageServices/saveRefreshTokenService';
import { tokenSignIn } from '../../services/navigation/tokenSignIn';
import Loading from '../../components/Loading';
import { useThemeColor } from '../../hooks/useThemeColor';
import { showError, showSuccess } from '../helper/helperFunction';
import { AsyncStorage } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Application from 'expo-application';
import styles from "../../components/Styles";


var Spinner = require('react-native-spinkit');
export default function SignInScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {





    const [email, setEmail] = useState<string>('');
    const [passward, setPassward] = useState<string>('');




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


        let responseEmail = await checkEmailService(email);

        if (responseEmail.data.exists == false) {
            // setEmailErrorMessage(useLocalErrorMessage({}, "emailDoesNotExist"))
            showError(useLocalErrorMessage({}, "emailDoesNotExist"));

            return false;
        }
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

        StatusBar.setHidden(true);

        // console.log("uniqueId: ", uniqueId);
        const updateLayout = () => {

            ScreenOrientation.getOrientationAsync().then((data) => {
                // console.log(data)
                // LANDSCAPE_LEFT = 3,   LANDSCAPE_RIGHT = 4,
                if (data === 4 || data === 3) {
                    // setbuttonWidth(Dimensions.get('window').width / 1.5);
                    // console.log("LANDSCAPE");

                } else {
                    // setbuttonWidth(Dimensions.get('window').width / 1.3)
                }
            });

        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })

    // const styles= StyleSheet.create({
    //     container: {
    //         paddingTop: 10,
    //         alignItems: "center",
    //         justifyContent: "center",

    //     },
    //     titleText:
    //     {
    //         fontSize: FontSize.Large,
    //         paddingTop: 30,
    //         paddingRight: 125,
    //         color: 'black',

    //     }, newUser: {
    //         paddingBottom: 10,
    //         marginLeft: 100,
    //         color: "#736e6e",
    //         fontWeight: "bold",


    //     },
    //     topLabel: {
    //         //paddingBottom: 40,
    //         marginBottom: 80,
    //         paddingRight: 20,
    //         marginLeft: 20,
    //         fontSize: 20,
    //         color: useThemeColor({}, "gri")


    //     }, topLabel2: {
    //         //paddingBottom: 40,
    //         marginBottom: 80,
    //         marginLeft: 35,
    //         fontSize: 20,
    //         color: useThemeColor({}, "gri")


    //     }, topLabel4: {
    //         //paddingBottom: 40,
    //         marginBottom: 80,
    //         marginLeft: 20,
    //         fontSize: 20,
    //         color: useThemeColor({}, "gri")


    //     },
    //     center: {
    //         width: '100%',
    //         //  flex: 1,
    //         alignItems: "center",
    //         justifyContent: "center",
    //         paddingBottom: 30,
    //         paddingTop: 30
    //     },
    //     center2: {
    //         width: '100%',
    //         //  flex: 1,
    //         alignItems: "center",
    //         justifyContent: "center",
    //         paddingBottom: 3,
    //         paddingTop: 30
    //     },
    //     flex1: {
    //         flex: 1,
    //     },
    //     rowFlex: {
    //         flexDirection: 'row'
    //     },
    //     spaceBetween: {
    //         justifyContent: 'space-between',
    //     }, background: {
    //         backgroundColor: '#ffff',
    //     },
    //     commandButtonSmall: {
    //         padding: 15,
    //         marginLeft: 10,
    //         paddingRight: 20,
    //         marginRight: 5,
    //         marginBottom: 0,
    //         borderRadius: 12,
    //         backgroundColor: '#39A1A3',
    //         alignItems: 'center',

    //         flexDirection: "row",
    //     }, commandButton: {
    //         padding: 15,
    //         width: Dimensions.get('window').width / 1.3,
    //         borderRadius: 12,
    //         borderColor: '#39A1A3',
    //         borderWidth: 1,
    //         backgroundColor: "#39A1A3",
    //         alignItems: 'center',
    //         justifyContent: "center",
    //         flexDirection: "row",
    //     }, panelButtonTitle: {
    //         fontSize: 17,
    //         fontWeight: 'bold',
    //         color: 'white',
    //         // marginLeft: 35,
    //         paddingRight: 60,
    //         paddingLeft: 60
    //     }, UUIDview: {
    //         backgroundColor: useThemeColor({}, ("lightGri")),
    //         marginLeft: 20,
    //         height: 60,
    //         width: Dimensions.get("window").width / 1.1,
    //         alignItems: "center",
    //         justifyContent: "center",

    //     }
    // })


    const Stages: Stage[] = [
        {//1 UUID
            Component: (nextHundller, backHundller, finshHundller) => (
                <View style={[
                    styles.background,
                    styles.flex1,
                    styles.center
                ]}>
                    <ScrollView >
                        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>

                            <Text style={styles.topLabel} > {useLocale({}, "Lisans")}</Text>

                            <View style={styles.UUIDview} >
                                <Text> {useLocale({}, "DiviceUUID")}: {Application.androidId}</Text>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>


                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: '#ffff', marginBottom: 30 }}>
                        <TouchableOpacity style={styles.commandButton} onPress={() => {
                            nextHundller()
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>
                    </View>

                </ View >
            ),
            Verifyier: async () => true, //checkPhone,
            Submit: async () => true

        },
        {//2 email
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <View style={[
                    styles.flex1,
                    styles.center
                ]}>

                    <Text style={styles.topLabel} > {useLocale({}, "emailScreen")}</Text>


                    <ScrollView>

                        <View style={[styles.center, styles.background]}>
                            <InputWithLabel
                                errorMessage={""}
                                keyboadType='email-address'
                                label={useLocale({}, "emailLabel")}
                                setValue={(value: string) => setEmail(value.trim())}
                                value={email.trim()}
                                placeholder={useLocale({}, "emailLabel")}
                                mode={"outlined"} backgroundColor={'#ffff'} outlineColor={undefined} multiline={undefined} />
                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 30, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.commandButton} onPress={() => {
                            if (email !== "") {
                                showSuccess("kaydedildi")
                                nextHundller()
                            } else {
                                showError(useLocalErrorMessage({}, "invalidEmail"));
                            }
                        }} >
                            <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
                            <FontAwesome style={{ marginLeft: 5 }} name={"chevron-right"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>
                    </View>
                </ View>

            ),
            Verifyier: async () => true,// checkEmail,
            Submit: async () => true

        },
        {//3 password
            Component: (nextHundller, backHundller, finshHundller) =>
            (
                <View style={[
                    // styles.background,
                    styles.flex1,
                    // styles.center
                ]}>
                  <Text style={styles.topLabel} > {useLocale({}, "passwordScreen")}</Text>

                    <ScrollView>

                        <View style={[styles.center, styles.background]}>
                            <InputWithLabel
                                errorMessage={""}
                                label={useLocale({}, "PasswadLabel")}
                                setValue={(value: string) => setPassward(value.trim())}
                                value={passward.trim()}
                                mode={"outlined"}
                                secureTextEntry={true}

                                placeholder={useLocale({}, "PasswadLabel")} backgroundColor={'#ffff'} keyboadType={undefined} outlineColor={undefined} multiline={undefined} />

                        </View>
                    </ScrollView>



                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 30, backgroundColor: '#ffff' }}>

                        <TouchableOpacity style={styles.commandButtonSmall} onPress={() => backHundller()} >
                            <FontAwesome style={{ marginLeft: 0 }} name={"chevron-left"} color={"#ffff"} size={FontSize.xLarge}></FontAwesome>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.commandButton} onPress={() => {
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
                // styles.container,
                styles.flex1
            ]}>
                <View style={{ flexDirection: 'row', backgroundColor: '#ffff' }}>
                    {/* <Text>Is Connected: {(netInfo.isConnected)}</Text> */}
                    <Image
                        style={{ marginLeft: Dimensions.get('window').width / 2 - 60, marginBottom: 15, marginTop: 13, width: 120, height: 40 }}
                        source={require('../../assets/images/invis.png')}

                    />
                </View>
                <View style={styles.separator}></View>
                <Text style={styles.titleText}>{useLocale({}, "signingInHeader")}</Text>



                <StagesLayout Stages={Stages} onFinish={onSuccess} />

            </View>
        )
    }


}


