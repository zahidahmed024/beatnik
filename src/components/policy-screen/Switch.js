import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { colors, fontSizes } from '../../constants'
import { ms, vs } from '../../utils'

export default function Switch() {
    return (
        <View style={{
            flexDirection: 'row',
            height: vs(40),
            overflow: 'hidden',
            borderRadius: ms(10),
            borderWidth: 1,
            borderColor: colors.border,
            // alignItems: 'center',
            // height: vs(20),
        }}>
            <SingleItem text='B2C' isActive={true} />
            <SingleItem text='B2B' isActive={false} />
        </View>
    )
}
function SingleItem({ isActive = false, text = "" }) {
    return (
        <TouchableOpacity style={{
            paddingVertical: vs(10),
            paddingHorizontal: ms(20),
            justifyContent: 'center',
            backgroundColor: isActive ? colors.primary : colors.lightPrimary,
        }}>
            <Text style={{
                ...fontSizes.h5,
                color: isActive ? colors.white : colors.text,
                textAlign: 'center',
            }}>{text}</Text>
        </TouchableOpacity>
    )
}