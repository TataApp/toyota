import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import { useThemeColor } from '../../hooks/useThemeColor'
import Navigation from '../../navigation/Navigation';

export default function FirstScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {

    setTimeout(() => { navigation.navigate("SecondScreen")}, 2000);
    useEffect(() => {
        //Runs only on the first render
        StatusBar.setHidden(true);

    }, []);

    return (
        <View style={styles.container}>
                <Image
                  style={{width:320 ,height:88}}
                  source={require('../../assets/images/kamyon.png')}
                  />
                  
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3fd8db",
        // flexDirection: 'column',

    },
    image: {
        width: 300,
        height: 120
    },
})
