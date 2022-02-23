


import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Image, TouchableOpacity, Animated, Modal, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from '../../firebase';
import { StatusBar } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useLocale } from '../../hooks/useLocale';
import Navigation from '../../navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { showError, showSuccess } from '../helper/helperFunction';
import InputWithLabel from '../../components/customComponent/InputWithLabel';

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, backgroundColor: "#f2f2f7" },
  title: { marginTop: 30, textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  topLabel: {
    //paddingBottom: 40,
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 25,
    paddingRight: 45,
    fontSize: 20,
    color: "black"


  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  }, commandButton: {
    padding: 15,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 30,
    marginTop: 50,
    borderRadius: 12,
    backgroundColor: '#5031C2',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: "row",
  }, phoneCommandButton: {
    padding: 15,
    marginLeft: 25,
    marginRight: 40,
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 12,
    backgroundColor: '#5031C2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",

  }, panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: 40,
    paddingRight: 60,
    paddingLeft: 60
  }, changePhoneTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: 40,
    paddingRight: 5,
    paddingLeft: 5
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

const CELL_COUNT = 6;



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






const ConfirmationPhoneCodeScreen = ({ route, navigation }: any) => {
  const { navigationPage } = route.params;


  const intervalRef = useRef<any>(null);
  const [timer, setTimer] = useState('00:00');
  //This will compute the difference between the target timer and the current time we have right now
  function getTimeRemainig(endtime: any) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 10000 / 60) % 60);
    // const hours =Math.floor((total/1000*60*60)%24);

    return {
      total, minutes, seconds
    };
  }

  function startTimer(deadline: any) {
    let { total, minutes, seconds } = getTimeRemainig(deadline);
    if (total >= 0) {

      setTimer(
        // (hours > 9 ? hours: '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime: any) {
    setTimer('00:00');
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000)

    intervalRef.current = id;
  }
  function getDeadlineTimer() {
    let deadline = new Date();
    // deadline.setMinutes(deadline.getMinutes());
    // deadline.setUTCMinutes(deadline.getUTCMinutes());
    deadline.setSeconds(deadline.getSeconds() + 60);

    return deadline;
  }
  function onClickResetBtn() {

    if (intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTimer());
  }





  const dispach = useDispatch();
  const state = useSelector((state: RootState) => state.getPhone)

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [verificationId, setVerificationId] = useState<any>(null);
  const recaptchaVerifier = useRef<any>(null);

  //01061864535
  const [phoneNumber, setPhoneNumber] = useState<any>(state);
  //const [code, setCode] = useState('597676');


  const showErr = () => {

    showError('Doğrulama kodu yanlış') //Please enter your destination location

  }
  // Function to be called when requesting for a verification code
  const sendVerification = () => {

    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  // Function to be called when confirming the verification code that we received
  // from Firebase via SMS
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      value
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
        setVisible(true)
        showSuccess("Doğrulama kodu doğuru")

      }).catch()
    {
      showErr();
      // console.log("man there is error");
    };

    // } catch (err) {
    //   console.log("man there is error");
    // }

  }









  const [visible, setVisible] = React.useState(false);

  const [phoneVisible, setPhoneVisible] = React.useState(false);




  useEffect(() => {
    //Runs only on the first render
    StatusBar.setHidden(true);

    console.log("custemerPhone: +9" + state)
    //201063750451  201061864535  201091966477 
    setPhoneNumber('+9' + state);
    sendVerification();

    clearTimer(getDeadlineTimer());
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }

  }, []);


  return (


    <SafeAreaView style={styles.root}>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {
                setVisible(false)
                navigation.navigate(navigationPage)

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
              source={require('../../assets/images/success.png')}
              style={{ height: 150, width: 150, marginVertical: 10 }}
            />
          </View>

          <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
            {useLocale({}, 'successfulTrip')}
          </Text>
        </ModalPoup>
      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ModalPoup visible={phoneVisible}>

          <View style={{ marginLeft: 30, marginTop: 10, backgroundColor: "#ffff" }}>
            <InputWithLabel
              mode='outlined'
              keyboadType='number-pad'
              errorMessage={""}
              label={useLocale({}, "PhoneLabel")}
              setValue={(value: string) =>
                setPhoneNumber(value)
              }
              value={phoneNumber}
              placeholder={"05XX-XXX-XXXX"}
            />
          </View>

          <TouchableOpacity style={styles.phoneCommandButton} onPress={() => {
            setPhoneVisible(false);
          }} >
            <Text style={styles.changePhoneTitle}>Numarsını değiştir</Text>

          </TouchableOpacity>
        </ModalPoup>
      </View>





      {/* Phone Number Input */}
      <FirebaseRecaptchaVerifierModal

        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />


      <Text style={styles.title}>{useLocale({}, ('verification'))}</Text>

      <Image
        style={{ marginTop: 40, marginLeft: 70, width: 200, height: 200 }}
        source={require('../../assets/images/password.png')}
      />


      <Text style={{ marginLeft: 10, marginTop: 12, fontSize: 16 }}>{useLocale({}, ('verification2'))}</Text>

      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <Text onPress={() => { setPhoneVisible(true) }} style={{ marginLeft: 70, marginTop: 20, fontSize: 16, textDecorationLine: 'underline', color: '#5031C2' }}>{useLocale({}, ('changePhoneNumber'))}</Text>

      <Text style={{ paddingLeft: 140, paddingTop: 10, fontWeight: 'bold' }} onPress={onClickResetBtn}> {timer}</Text>

      <TouchableOpacity style={styles.commandButton} onPress={() => {
        confirmCode()
      }}  >
        <Text style={styles.panelButtonTitle}>{useLocale({}, 'ConfirmCode')}</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};





export default ConfirmationPhoneCodeScreen;


