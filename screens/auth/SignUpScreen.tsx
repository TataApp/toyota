import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Button, StyleSheet } from 'react-native'
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
import { showError } from '../helper/helperFunction';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {

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
            paddingRight: 105,


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
            marginBottom: 90,
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
            backgroundColor: useThemeColor({}, "mor"),
            justifyContent: "center",
            alignItems: "center",


        },

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
        if(responsePhone.data.exists){
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

        console.log("name with trim: "+ name.trim()+"jjjjjjj");

        let response = await signUpService(name, email, phone, passward);


        return response.success;
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
                    styles.center
                ]}>
                    <Text style={styles.topLabel} > {useLocale({}, "nameScreenSignUp")}</Text>


                    <View>

                        <View style={styles.center1}>
                            <InputWithLabel
                                errorMessage={emailErrorMessage}
                                label={useLocale({}, "namelLabel")}
                                setValue={(value: string) => setName(value.trim())}
                                value={name.trim()}
                                placeholder={useLocale({}, "namelLabel")}
                            />


                        </View>


                        <View style={[
                            styles.rowFlex,
                            { marginLeft: 110 },
                        ]}>

                            {/* <IconButton size={FontSize.xxxxxxxxxLarge} locked name={useLocale({}, "direction") == "rtl" ? "chevron-circle-right" : "chevron-circle-left"} onClick={backHundller} /> */}
                            <TouchableOpacity style={styles.circle} onPress={() => {
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

                            </TouchableOpacity>

                        </View>

                        <Text style={styles.newUser}>{useLocale({}, "oldUser")}</Text>
                        <View style={styles.button1}>
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#CCA4FB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>


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
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#CCA4FB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>


                    </View>



                </ View>
            ),
            Verifyier: checkPhone,
            Submit: async () => true

        },
        {//3
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
                            />
                            <Text style={{ color: 'red' }}>{emailErrorMessage}</Text>


                        </View>


                        <View style={[
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

                        </View>

                        <Text style={styles.newUserLast}>{useLocale({}, "oldUser")}</Text>
                        <View style={styles.button1}>
                            <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#CCA4FB" onPress={() => {
                                navigation.navigate('SignInScreen')
                            }} />
                        </View>


                    </View>

                </ View>

            ),
            Verifyier: checkEmail,
            Submit: async () => true


        },
        {//4
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
                        />
                        <Text style={styles.errorText}>{passwardErrorMessage}</Text>

                        <InputWithLabel
                            errorMessage={""}
                            label={useLocale({}, "ConfirmPasswadLabel")}
                            setValue={(value: string) => setConfirmPassward(value.trim())}
                            value={confirmPassward.trim()}
                            secureTextEntry
                            placeholder={useLocale({}, "ConfirmPasswadLabel")}
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
                        <FlatButton text={useLocale({}, "signInHeader")} bgrColor="#CCA4FB" onPress={() => {
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


