// import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
// import { View } from "../../components/themed/View"
// import { Text } from "../../components/themed/Text"
// import { useLocale } from '../../hooks/useLocale'
import { TextInput } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";
import { createRef } from 'react'
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import { StackNavigationProp } from '@react-navigation/stack'








import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useLocale } from '../../hooks/useLocale';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { ActionCreators } from '../../state/action-creators';
import { bindActionCreators } from 'redux';

export default function placeAddress({ navigation }: { navigation: StackNavigationProp<MyProfileParamList> }) {

    const dispach = useDispatch();
    const {addNewLocation} = bindActionCreators(ActionCreators, dispach)



    const [openCountry, setOpenCountry] = useState(false);
    const [openRegin, setOpenRegin] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);

    const [valueCountry, setValueCountry] = useState(null);
    const [valueRegin, setValueRegin] = useState(null);
    const [valueDistrict, setValueDistrict] = useState(null);
    const [phone, setphone] = useState<string>('');

    const [itemsCountry, setItemsCountry,] = useState([
        { label: 'Turkey', value: 1 },
        { label: 'Egypt', value: 2 },
        { label: 'Saudi Arabia', value: 3 },
    ]);

    const [itemsRegion, setItemsRegin,] = useState([
        { label: 'mmm', value: 1 },
        { label: 'rrrr', value: 2 },
        { label: 'ttt', value: 3 },
    ]);

    const [itemsDistrict, setItemsDistrict,] = useState([
        { label: 'District', value: 1 },
        { label: 'District', value: 2 },
        { label: 'District', value: 3 },
    ]);


    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [addressDetails, setAddressDetails] = useState('');
    const [AdressName, setAdressName] = useState('');

    const phoneInput = createRef<PhoneInput>();
    const [value1, setValue1] = useState("");
    const [formattedValue, setFormattedValue] = useState("");



    const onCountryOpen = () => {
        setOpenRegin(false);
    }

    const onCityOpen = () => {
        setOpenCountry(false);
    }


    return (
        <ScrollView>
            <View style={{ flexGrow: 1, backgroundColor: "#ffffff" , marginTop:30}}>
                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#5031C2', marginLeft: 20 , marginTop:10 }}>{useLocale({}, ('placeAddress'))}</Text>
                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            marginTop: 5,
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />

                    <TextInput
                        style={{ marginTop: 10 , marginLeft:20 , marginRight:20 }}
                        label={useLocale({}, ('namelLabel'))}
                        mode='outlined'
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        style={{ marginTop: 10 , marginLeft:20 , marginRight:20 }}
                        label={useLocale({}, ('lastNameLabel'))}
                        mode='outlined'
                        value={lastname}
                        onChangeText={text => setLastName(text)}
                    />

{/* 
                    <View style={{ marginLeft: 20 }}>
                      
                       // TODO: check https://reactnativeexample.com/react-native-component-for-phone-number/     to import the validation of the phone number
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={value1}
                            defaultCode="DM"
                            onChangeText={(text) => {
                                setValue1(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            

                            withDarkTheme
                            // withShadow
                            autoFocus

                        />
                    </View>
 */}


                    <View style={{ marginLeft: 20 }}>
                        <InputWithLabel
                            mode='outlined'
                            keyboadType='number-pad'
                            errorMessage={""}
                            label={useLocale({}, "")}
                            setValue={(value: string) =>
                                setphone(value)
                            }
                            value={phone}
                            placeholder={"05XX-XXX-XXXX"}
                        />
                    </View>

                    <View
                        style={{
                            // borderColor:"#C9C9C9",
                            marginTop: 10,
                            borderBottomColor: '#C9C9C9',
                            borderBottomWidth: 1,
                        }}
                    />



                    <View>

                    </View>





                    <View style={{ flexDirection: 'column-reverse' }} >


                        <View style={{ margin: 20, marginTop: 0 }}>
                            <DropDownPicker
                                style={{ borderColor: '#919191', backgroundColor: '#F6F6F6' }}
                                open={openDistrict}
                                //onOpen={onCityOpen}
                                value={valueDistrict}
                                items={itemsDistrict}
                                setOpen={setOpenDistrict}
                                setValue={setValueDistrict}
                                setItems={setItemsDistrict}
                                placeholder={useLocale({}, ("district"))}
                            />

                        </View>

                        <View style={{ margin: 20, marginTop: 0 }}>
                            <DropDownPicker
                                style={{ borderColor: '#919191', backgroundColor: '#F6F6F6' }}
                                open={openRegin}
                                onOpen={onCityOpen}
                                value={valueRegin}
                                items={itemsRegion}
                                setOpen={setOpenRegin}
                                setValue={setValueRegin}
                                setItems={setItemsRegin}
                                placeholder={useLocale({}, ("city"))}
                            />
                        </View>


                        <View style={{ margin: 20 }}>
                            <DropDownPicker
                                style={{ borderColor: '#919191', backgroundColor: '#F6F6F6' }}
                                open={openCountry}
                                onOpen={onCountryOpen}
                                value={valueCountry}
                                items={itemsCountry}
                                placeholder={useLocale({}, ("country"))}
                                setOpen={setOpenCountry}
                                setValue={setValueCountry}
                                setItems={setItemsCountry}
                            />

                        </View>

                    </View>


                    <View>
                        <TextInput
                            style={{ margin: 20, marginTop: 0 }}
                            label={useLocale({}, ('address'))}
                            mode='outlined'
                            value={addressDetails}
                            placeholder={useLocale({}, ('addressDetails'))}
                            onChangeText={text => setAddressDetails(text)}
                        />

                    </View>

                    <View>
                        <TextInput
                            style={{ margin: 20, marginTop: 0 }}
                            label={useLocale({}, ('addressName'))}
                            mode='outlined'
                            value={AdressName}
                            placeholder={useLocale({}, ('addressNameDetails'))}
                            onChangeText={text => setAdressName(text)}
                        />

                    </View>
                </View>

                <View>
            
                    <TouchableOpacity style={styles.commandButton} onPress={()=> {
                       // addNewLocation(AdressName,addressDetails)
                        navigation.navigate('SevedLoctionsScreen')
                        }} >
                        <Text style={styles.panelButtonTitle}>{useLocale({}, 'saveAdress')}</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    );


}

const styles = StyleSheet.create({
    commandButton: {
        padding: 15,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: '#5031C2',
        alignItems: 'center',
        marginTop: 10,
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});

