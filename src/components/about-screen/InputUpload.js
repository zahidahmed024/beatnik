import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes, strings } from '../../constants'
import { ms, vs } from '../../utils'

export default function InputUpload() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{strings.upload_picture}</Text>
            <Image
                source={icons.upload}
                style={{
                    height: ms(20),
                    width: vs(20)
                }}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: ms(310),
        marginHorizontal: ms(20),
        marginVertical: vs(6),
        borderBottomWidth: 1,
        borderColor: colors.border
    },
    text: {
        paddingVertical: 8,
        ...fontSizes.h7,
        lineHeight: 30,
        fontWeight: 'bold'
    }
})