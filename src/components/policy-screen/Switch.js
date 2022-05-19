import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontSizes } from '../../constants'
import { ms, vs } from '../../utils'

export default function Switch() {
    return (
        <View style={styles.container}>
            <SingleItem text='B2C' isActive={true} />
            <SingleItem text='B2B' isActive={false} />
        </View>
    )
}
function SingleItem({ isActive = false, text = "" }) {
    return (
        <TouchableOpacity style={styles.singleItem(isActive)}>
            <Text style={{
                ...fontSizes.h5,
                color: isActive ? colors.white : colors.text,
                textAlign: 'center',
            }}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: vs(40),
        overflow: 'hidden',
        borderRadius: ms(10),
        borderWidth: 1,
        borderColor: colors.border,
    },
    singleItem: (isActive) => ({
        paddingVertical: vs(10),
        paddingHorizontal: ms(20),
        justifyContent: 'center',
        backgroundColor: isActive ? colors.primary : colors.lightPrimary,
    })
})