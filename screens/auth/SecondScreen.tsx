import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Dimensions, ScrollView } from 'react-native'
import AwesomeButton from 'react-native-really-awesome-button';
//import AwesomeButton from 'react-native-really-awesome-button';
import IconButton from '../../components/customComponent/IconButton';
import { useThemeColor } from '../../hooks/useThemeColor'
import Navigation from '../../navigation/Navigation';
import { Button } from 'react-native-elements';
import FlatButton from '../../components/FlatButton';
import { useLocale } from '../../hooks/useLocale';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { FontSize } from '../../constants/FontSize';
import { connect } from 'react-redux';
//import useOrientation from '../../hooks/useOrientation';
import * as ScreenOrientation from 'expo-screen-orientation';

// function mapStateToProps(state) {
//     return {
//         data: state
//     };

// }

// function mapDispatchToProps(dispatch) {
//   return{
//     goodPerformance: id => dispatch({
//         type: "GOOD_PERFORMANCE",
//         id: id
//     }),

//     badPerformance: id => dispatch({
//         type: "BAD_PERFORMANCE",
//         id: id
//     }),
//   }
// }


export default  function SecondScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {


    useEffect(() => {
        //Runs only on the first render
        // changeScreenOrientation();
        StatusBar.setHidden(true);


    });

    //  async function changeScreenOrientation() {
    //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    //   }

   // const oriention = useOrientation();

  
    return (

        <ScrollView>
        <View style={styles.container}>
            <View style={styles.text1}>
            {/* <Text style={{ fontSize: 30 }} >{Object.values(this.props.data)} </Text> */}

                <Text style={{ fontSize: 30 }} >{useLocale({}, "secondScreen1")} </Text>
                <Text style={{ fontSize: 20, color: useThemeColor({}, "gri") }}>{useLocale({}, "secondScreen2")}</Text>
            </View>
            <Image
                style={{ width: Dimensions.get("window").width /1.2 , height: Dimensions.get("window").height /3, marginLeft: 30 }}
                source={require('../../assets/images/kamyon2.png')}
            />

            <View style={styles.button}>
                <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#37B8BB" onPress={() => {
                    navigation.navigate('SignInScreen')
                }} />
            </View>
            <View style={styles.button2}>
                <FlatButton text={useLocale({}, "secondScreen4")} bgrColor="#3DCCC0" onPress={() => {
                    navigation.navigate("SignUpScreen")
                }} />
            </View>

            



        </View>
        </ScrollView>


    )
}

// export default connect(mapStateToProps , mapDispatchToProps)(SecondScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 30,
        // justifyContent: 'center',
         alignItems: 'center',
        backgroundColor: "white",
        // flexDirection: 'column',

    },
    image: {
        width: 300,
        height: 120,
        marginTop: 200,
    },
    text1: {
        paddingTop: 50,
        paddingLeft: 20,
        paddingBottom: 34,
        marginTop: 0
    },
    button: {
        paddingTop: 20,

        // paddingLeft: 30,
        // paddingRight: 30,

        //  width:0


    },button2:{
        paddingTop: 20,
        paddingBottom: 100

    }
})
