import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { useLocale } from '../../hooks/useLocale';
import { StackNavigationProp } from '@react-navigation/stack';
import StagesLayout from '../../components/layouts/StagesLayout';
import { FontSize } from '../../constants/FontSize';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import IconButton from '../../components/customComponent/IconButton';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { signIn } from '../../services/navigation/signIn';
import { signOut } from '../../services/navigation/signOut';
import { getMyProfileService } from '../../services/apiCalls/getMyProfileService';
import Loading from '../../components/Loading';
import { updateMyProfileService } from '../../services/apiCalls/updateMyProfileService';

export default function ChangeProfileScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
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
            justifyContent: "space-between"
        },
        fullWidth: {
            width: '100%'
        }
    })

    const [loaded, setLoaded] = useState(false);

    const [firstName, setFirstName] = useState<string>("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");

    const [address, setAddress] = useState<string>("");
    const [addressErrorMessage, setAddressErrorMessage] = useState<string>("");

    const getUserProfile = async () => {
        let response = await getMyProfileService();
        if (response == null) {
            signOut();
            return false;
        }
        if (response.success) {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAddress(response.data.address);
            return true;
        }
        return false;
    }

    const checkFirstName = async (): Promise<boolean> => {
        setFirstNameErrorMessage("");
        if (validator.isEmpty(firstName)) {
            setFirstNameErrorMessage(useLocalErrorMessage({}, "required"));
            return false;
        }
        if (validator.isLength(firstName, { min: 0, max: 50 }) == false) {
            setFirstNameErrorMessage(useLocalErrorMessage({}, "lengthMustBeLess") + "50");
            return false;
        }
        return true;
    }

    const checkLastName = async (): Promise<boolean> => {
        setLastNameErrorMessage("");
        if (validator.isEmpty(lastName)) {
            setLastNameErrorMessage(useLocalErrorMessage({}, "required"));
            return false;
        }
        if (validator.isLength(lastName, { min: 0, max: 50 }) == false) {
            setLastNameErrorMessage(useLocalErrorMessage({}, "lengthMustBeLess") + "50");
            return false;
        }
        return true;
    }

    const checkAddress = async (): Promise<boolean> => {
        setAddressErrorMessage("");
        if (validator.isEmpty(address)) {
            setAddressErrorMessage(useLocalErrorMessage({}, "required"));
            return false;
        }
        if (validator.isLength(address, { min: 0, max: 200 }) == false) {
            setAddressErrorMessage(useLocalErrorMessage({}, "lengthMustBeLess") + "200");
            return false;
        }
        return true;
    }

    const updateProfile = async (): Promise<boolean> => {

        let response = await updateMyProfileService(
            {
                firstName,
                lastName,
                address
            }
        )

        if (response == null) {
            signOut();
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
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={firstNameErrorMessage}
                            label={useLocale({}, "firstNameLabel")}
                            setValue={(value: string) => setFirstName(value)}
                            value={firstName}
                            placeholder={useLocale({}, "firstNameLabel")}
                        />
                    </View>
                    <View>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkFirstName,
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
                            errorMessage={lastNameErrorMessage}
                            label={useLocale({}, "lastNameLabel")}
                            setValue={(value: string) => setLastName(value)}
                            value={lastName}
                            placeholder={useLocale({}, "lastNameLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkLastName,
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
                            errorMessage={addressErrorMessage}
                            label={useLocale({}, "addressLabel")}
                            setValue={(value: string) => setAddress(value)}
                            value={address}
                            placeholder={useLocale({}, "addressLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name="check" onClick={finishHundler} />
                    </View>

                </View>
                ),
            Verifyier: checkAddress,
            Submit: updateProfile
        }
    ]
    if (loaded == false) {
        return <Loading onStart={getUserProfile} onFinish={async () => setLoaded(true)} />
    } else {
        return (
            <View style={[
                styles.container,
                styles.flex1
            ]}>
                <View >
                    <Text style={styles.titleText}>{useLocale({}, "profileHeader")}</Text>
                </View>

                <StagesLayout Stages={Stages} onFinish={onSuccess} />

            </View>
        )
    }
}