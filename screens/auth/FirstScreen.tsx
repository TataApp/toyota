import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, StatusBar, Dimensions } from 'react-native'
import { useThemeColor } from '../../hooks/useThemeColor'
import Navigation from '../../navigation/Navigation';

export default function FirstScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {

    setTimeout(() => { navigation.navigate("SignInScreen")}, 2000);
    useEffect(() => {
        //Runs only on the first render
        StatusBar.setHidden(true);

    }, []);

    
    return (
        <View style={styles.container}>
                <Image
                  style={{width:Dimensions.get('window').width/1.2 ,height:Dimensions.get('window').height/6.8 }}
                  source={require('../../assets/images/invis.png')}
                  />
                  
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffff",
        // flexDirection: 'column',

    },
    image: {
        width: 300,
        height: 120
    },
})
