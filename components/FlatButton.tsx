import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function FlatButton({ text,bgrColor,onPress }: { text: string,bgrColor:string , onPress:any}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                borderRadius: 13, paddingVertical: 14,
                paddingHorizontal: 10, backgroundColor: bgrColor
            }}>
                <Text style={styles.buttonText} >{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})
