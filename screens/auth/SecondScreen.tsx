import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
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
        StatusBar.setHidden(true);

    }, []);

    return (

        <View style={styles.container}>
            <View style={styles.text1}>
            {/* <Text style={{ fontSize: 30 }} >{Object.values(this.props.data)} </Text> */}

                <Text style={{ fontSize: 30 }} >{useLocale({}, "secondScreen1")} </Text>
                <Text style={{ fontSize: 20, color: useThemeColor({}, "gri") }}>{useLocale({}, "secondScreen2")}</Text>
            </View>
            <Image
                style={{ width: 350, height: 240, marginLeft: 30 }}
                source={require('../../assets/images/kamyon2.png')}
            />

            <View style={styles.button}>
                <FlatButton text={useLocale({}, "secondScreen3")} bgrColor="#9273CB" onPress={() => {
                    navigation.navigate('SignInScreen')
                }} />
            </View>
            <View style={styles.button}>
                <FlatButton text={useLocale({}, "secondScreen4")} bgrColor="#CCA4FB" onPress={() => {
                    navigation.navigate("SignUpScreen")
                }} />
            </View>

            <View>
                {/* 5031C2 */}
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('InـoutOfCityScreen')} >
                    <Text style={styles.panelButtonTitle}>{useLocale({}, 'HesapsızDevamEt')}</Text>
                    <FontAwesome style={{ marginLeft: 15 }} name={"chevron-right"} color={"#ffff"} size={FontSize.Regular}></FontAwesome>
                </TouchableOpacity>
            </View>



        </View>

    )
}

// export default connect(mapStateToProps , mapDispatchToProps)(SecondScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
        paddingLeft: 30,
        paddingRight: 30,

        //  width:0


    }, commandButton: {
        padding: 15,
        marginLeft: 30,
        paddingLeft: 70,
        marginRight: 30,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: '#5031C2',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: "row",
    }, panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        // marginLeft: 80
    },
})
