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
import { AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNetInfo } from "@react-native-community/netinfo";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useLocale } from '../../hooks/useLocale';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize';
import { useThemeColor } from '../../hooks/useThemeColor';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export default function MainScreen({ navigation }: any) {


  const netInfo = useNetInfo();

  //#region 
  const dispach = useDispatch();
  const statTimeAndDate = useSelector((state: RootState) => state.dateAndTime)

  //ActionCreators
  const { toAllMovingCheck } = bindActionCreators(ActionCreators, dispach)
  const { dateAndTimeCheckAction } = bindActionCreators(ActionCreators, dispach)

  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [Details, setDetails] = useState("");











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
    }, text1: {
      fontSize: FontSize.Large,
      fontWeight: "bold",
      marginLeft: 100,
      marginTop: 20
    }, text2:
    {
      fontSize: FontSize.Regular,
      marginLeft: 20,
      marginTop: 20,
    }
    , sectionView: {
      backgroundColor: useThemeColor({}, ("lightGri")),
      width: Dimensions.get("window").width / 1.1,
      height: 50,
      marginLeft: 20,
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 0.3,
      borderBottomColor: useThemeColor({}, ("gri")),
    }, sectionText: {
      fontWeight: "bold",
      fontSize: FontSize.xLarge,
      color: useThemeColor({}, ("gri")),
    }, input: {
      marginLeft: 20,
      marginTop: 20,
    }, commandButton: {
      width: Dimensions.get('window').width / 1.1,
      borderRadius: 12,
      borderColor: '#39A1A3',
      borderWidth: 1,
      backgroundColor: "#39A1A3",
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 20,
      padding: 15,

      flexDirection: "row",
    }, panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 35,
      paddingLeft: 100
    }



  })






  useEffect(() => {
    //Runs only on the first render
    StatusBar.setHidden(true);
    // Stages.length=1;
    // React.useCallback(() => {
    //     getTripsForDriver();
    //    }, [])

  }, []);




  return (
    <View>
      <View style={{ flexDirection: 'row', backgroundColor: '#ffff' }}>
        {/* <Text>Is Connected: {(netInfo.isConnected)}</Text> */}
        <Image
          style={{ marginLeft: Dimensions.get('window').width / 2 - 70, marginBottom: 15, marginTop: 13, width: 120, height: 40 }}
          source={require('../../assets/images/invis.png')}

        />

        {/* {useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} */}
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <FontAwesome5 name="wifi" size={FontSize.xLarge} color={netInfo.isConnected == true ? useThemeColor({}, "green") : useThemeColor({}, "red")} />
        </View>
      </View>
      <View style={styles.separator}></View>

      <ScrollView>

        <Text style={styles.text1} >{useLocale({}, "AllComponentsPage1")}</Text>
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>{useLocale({}, "Section1")}</Text>
        </View>
        {/* <Text style={styles.text2}>{useLocale({}, "InputNumber")}</Text> */}

        <View style={styles.input}>
          <InputWithLabel
            // errorMessage={emailErrorMessage}
            label={useLocale({}, "InputNumber")}
            setValue={(value: string) => setInputNumber(value.trim())}
            value={inputNumber.trim()}
            placeholder={useLocale({}, "InputNumber")}
            outlineColor={useThemeColor({}, ("gri"))} mode={"outlined"} backgroundColor={'#ffff'} errorMessage={''} keyboadType={undefined} multiline={undefined} />
        </View>

        <View style={styles.input}>
          <InputWithLabel
            // errorMessage={emailErrorMessage}
            label={useLocale({}, "InputDate")}
            setValue={(value: string) => setInputDate(value.trim())}
            value={inputDate.trim()}
            placeholder={useLocale({}, "InputDate")}
            outlineColor={useThemeColor({}, ("gri"))} mode={"outlined"} backgroundColor={'#ffff'} errorMessage={''} keyboadType={undefined} multiline={undefined} />
        </View>

        <View style={styles.input}>
          <InputWithLabel
            // errorMessage={emailErrorMessage}
            label={useLocale({}, "InputEmail")}
            setValue={(value: string) => setInputEmail(value.trim())}
            value={inputEmail.trim()}
            placeholder={useLocale({}, "InputEmail")}
            outlineColor={useThemeColor({}, ("gri"))} mode={"outlined"} backgroundColor={'#ffff'} errorMessage={''} keyboadType={undefined} multiline={undefined} />
        </View>

        <View style={{ marginTop: 40 }} />
        <View style={styles.sectionView}>
          <Text style={styles.sectionText}>{useLocale({}, "Section2")}</Text>
        </View>

        <View style={styles.input}>
          <InputWithLabel
            // errorMessage={emailErrorMessage}
            label={useLocale({}, "Details")}
            multiline={true}
            setValue={(value: string) => setInputEmail(value.trim())}
            value={inputEmail.trim()}
            placeholder={useLocale({}, "Details")}
            outlineColor={useThemeColor({}, ("gri"))} mode={"outlined"} backgroundColor={'#ffff'} errorMessage={''} keyboadType={undefined} />
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => {

        }} >
          <Text style={styles.panelButtonTitle}>{useLocale({}, 'continue')}</Text>
        </TouchableOpacity>


{/* 
        <View style={{ margin: 20, marginTop: 5, marginBottom: 5 }}>

          <DropDownPicker
            onPress={() => {
              if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                if (valueRegin && valueRegin2 !== null) {
                  setbackgroundCheck2('#5031C2')
                }
              }
            }}
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

          <TextInput
            style={{ marginTop: 20 }}
            label={useLocale({}, ('address'))}
            mode='outlined'

            value={fromWhereAddressDetails}
            placeholder={useLocale({}, ('addressDetails'))}
            onChangeText={text => {
              setfromWhereAddressDetails(text)
              if (toWhereAddressDetails && fromWhereAddressDetails !== " ") {
                if (valueRegin && valueRegin2 !== null) {
                  setbackgroundCheck2('#5031C2')
                }
              }
            }}
          />
          <Ionicons style={{ marginLeft: 160, marginTop: 20 }} name="ios-arrow-down-circle-outline" size={FontSize.xxxxxxxxxLarge} color='#5031C2' />

        </View> */}

        <View style={{ marginBottom: 100 }} />


      </ScrollView>

    </View>



  )



}


