import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes } from '../../constants'
import { ms, vs } from '../../utils'

export default function InputUpload() {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: ms(310),
            marginHorizontal: ms(20),
            marginVertical: vs(6),
            borderBottomWidth: 1,
            borderColor: colors.border
        }}>
            <Text style={{
                paddingVertical: 8,
                ...fontSizes.h7,
                lineHeight:30,
                fontWeight: 'bold'
            }}>Upload Picture</Text>
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