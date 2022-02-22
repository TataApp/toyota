import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from './themed/View'
import IconButton from './customComponent/IconButton'
import { FontSize } from '../constants/FontSize'

export default function SettingsIcon({onClick}: { onClick:()=>void }) {
    return (
        <View style={styles.buttonContainer}>
            <IconButton size={FontSize.xxxxxLarge} name="bars" onClick={async () => onClick()} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 10,
    
    }
})