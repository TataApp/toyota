import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, RecyclerViewBackedScrollViewComponent } from 'react-native'

import * as ScreenOrientation from 'expo-screen-orientation';

export default function FlatButton({ text, bgrColor, onPress }: { text: string, bgrColor: string, onPress: any }) {

    const [buttonWidth, setbuttonWidth] = useState(Dimensions.get('window').height / 2);




    useEffect(() => {

        const updateLayout = () => {
            // let data:any;

            ScreenOrientation.getOrientationAsync().then((data) => {
                // console.log(data)
                // LANDSCAPE_LEFT = 3,   LANDSCAPE_RIGHT = 4,
                if (data === 4 || data === 3) {
                    setbuttonWidth(Dimensions.get('window').width / 1.5);
                    // console.log("LANDSCAPE");

                } else {
                    setbuttonWidth(Dimensions.get('window').height / 2)
                }
            });

        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })

    //Dimensions.addEventListener('change',updateLayout);


    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                borderRadius: 13, paddingVertical: 14,
                paddingHorizontal: 10, backgroundColor: bgrColor,
                width: buttonWidth,
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
