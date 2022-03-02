import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../themed/View'
import { Text } from '../themed/Text'
import { FontSize } from '../../constants/FontSize'
import { useThemeColor } from '../../hooks/useThemeColor'
//import { TextInput } from '../themed/TextInput'
import { TextInput  } from 'react-native-paper';


export default function InputWithLabel(
    {backgroundColor,label,errorMessage,placeholder,value,setValue,secureTextEntry,keyboadType ,mode,}:
    {
        backgroundColor:string,
        label:string,
        errorMessage:string,
        placeholder?:string,
        value:string,
        setValue:(value:string)=>void,
        secureTextEntry?:boolean,
        keyboadType:any
        mode:any,
    }) {
    const styles = StyleSheet.create({
        inputComponentContainer: {
            width: '80%',
            backgroundColor:backgroundColor,
            // color:'black'
        },
        titleText: {
            fontSize: FontSize.Large,

        },
        errorText :{
            fontSize: FontSize.Small,
            color: useThemeColor({},"error"),
            paddingBottom:30    

        },
        input:{
            width: 200,
            height: 50,
            borderWidth: 1,
            borderColor: "red",
        }
    })

    let error1:boolean = false;
    return (
        <View style={styles.inputComponentContainer}>
            <Text style={{color:'black'}}>{label}</Text>
            {errorMessage.length > 0 ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput theme={{ colors: { primary: '#299195',underlineColor:'#299195',}}} selectionColor={"#299195"} outlineColor={"#299195"}  mode={mode} keyboardType={keyboadType} secureTextEntry={secureTextEntry}  label={placeholder}  value={value} onChangeText={setValue} />
        </View>
    )
}


//<TextInput style={styles.input} secureTextEntry={secureTextEntry}   placeholder={placeholder} value={value} onChangeText={setValue} />
