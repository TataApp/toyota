


import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontSize } from '../../constants/FontSize';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { changePasswordService } from '../../services/apiCalls/changePasswordService';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from '../../components/themed/View';
import { Text } from '../../components/themed/Text';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import { useLocale } from '../../hooks/useLocale';
import IconButton from '../../components/customComponent/IconButton';
import StagesLayout from '../../components/layouts/StagesLayout';
import { revokeTokenService } from '../../services/apiCalls/revokeTokenService';
import { signOut } from '../../services/navigation/signOut';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { showError } from '../helper/helperFunction';
export default function ChangePasswordScreen({ navigation }: any) {



    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
        }, square: {
            alignItems: "center",
            justifyContent: 'center',

            marginLeft: 20,
            marginTop: 15,
            width: 45,
            height: 45,
            borderRadius: 15,

            backgroundColor: "#F3F6FF",
        },
        titleText: {
            fontSize: FontSize.Large
        },


        center: {
            width: '100%',
            alignItems: "center",
            justifyContent: "center"
        },
        flex1: {
            flex: 1
        },
        rowFlex: {
            flexDirection: "row"
        },
        spaceBetween: {
            paddingTop:20,
            justifyContent: "space-between"
        },
        fullWidth: {
            width: '100%'
        }
    })

    const hundleSignOut = async () => {
        await revokeTokenService();
        // console.log("signOut")

        await signOut();

    }

    const [oldPassword, setOldPassword] = useState<string>("");
    const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState<string>("");

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>("");


    const validateOldPassword = async (): Promise<boolean> => {
        let result: boolean = true;
        if (validator.isEmpty(oldPassword) == true) {
            setOldPasswordErrorMessage(useLocalErrorMessage({}, "required"));
            showError(useLocalErrorMessage({}, "required"))
            result = false;
        }
        else
            setOldPasswordErrorMessage("");

        return result;
    }

    const changePassword = async (): Promise<boolean> => {
        let result: boolean = true;

        if (validator.equals(newPassword, confirmPassword) == false) {
            // setConfirmPasswordErrorMessage(useLocalErrorMessage({}, "confirmPasswardDoesntMatch"))
            showError(useLocalErrorMessage({}, "confirmPasswardDoesntMatch"))
            result = false;
        }
        else
            setConfirmPasswordErrorMessage("");

        if (validator.isLength(newPassword, { min: 8, max: 20 }) == false) {
            // setNewPasswordErrorMessage(useLocalErrorMessage({}, "passwardLength"))
            showError(useLocalErrorMessage({}, "passwardLength"));
            result = false;
        }
        else
            setNewPasswordErrorMessage("");

        if (result == false)
            return result;

        let response = await changePasswordService(
            oldPassword,
            newPassword
        )

        if (response == null) {
            return false;
        }

        return response.success;
    }


    const onSuccess = () => {
        navigation.pop();
    }

    const Stages: Stage[] = [
        {
            Component: (nextHundler, backHundler, finishHundler) =>
            (<View style={[
                styles.flex1,
                styles.center
            ]}>

                <View>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => nextHundler()}>
                        <View style={styles.square} >
                            <MaterialCommunityIcons name="key" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                        </View>
                        <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>{useLocale({}, ("changePasswordHeader"))}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => hundleSignOut()} style={{ flexDirection: 'row' }}>
                        <View style={styles.square} >
                            <AntDesign name="logout" size={FontSize.xxxxxLarge} color="#B2B5C8" />
                        </View>
                        <Text style={{ marginTop: 22, fontSize: 18, marginLeft: 20, color: "#515151" }}>Oturumu Kapat</Text>
                    </TouchableOpacity>
                </View>

            </View>

            ),
            Verifyier: async () => true,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
            (<View style={[
                styles.flex1,
                styles.center
            ]}>

                <View style={styles.center}>
                    <InputWithLabel
                        errorMessage={""}
                        label={useLocale({}, "oldPasswordLabel")}
                        setValue={(value: string) => setOldPassword(value)}
                        value={oldPassword}
                        secureTextEntry
                        placeholder={useLocale({}, "oldPasswordLabel")}
                    />
                </View>
                <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton size={30} locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton size={30} locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>
            </View>

            ),
            Verifyier: validateOldPassword,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
            (

                <View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={""}
                            label={useLocale({}, "newPasswordLabel")}
                            setValue={(value: string) => setNewPassword(value)}
                            value={newPassword}
                            secureTextEntry
                            placeholder={useLocale({}, "newPasswordLabel")}
                        />
                        <InputWithLabel
                            errorMessage={""}
                            label={useLocale({}, "ConfirmPasswadLabel")}
                            setValue={(value: string) => setConfirmPassword(value)}
                            value={confirmPassword}
                            secureTextEntry
                            placeholder={useLocale({}, "ConfirmPasswadLabel")}
                        />
                    </View>

                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton size={30} locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton size={30} locked name="check" onClick={finishHundler} />
                    </View>

                </View>
            ),
            Verifyier: async () => true,
            Submit: changePassword
        }
    ]
    return (
        <View style={[
            styles.container,
            styles.flex1
        ]}>
            {/* <View >
                <Text style={styles.titleText}>{useLocale({}, "createNewAccountHeader")}</Text>
            </View> */}

            <StagesLayout Stages={Stages} onFinish={onSuccess} />

        </View>
    )
}

const styles = StyleSheet.create({})