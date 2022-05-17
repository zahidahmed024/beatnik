import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ms } from '../../utlis'
import { colors, fontSizes } from '../../constants'
import { icons } from '../../assets'

export default function FilterRow() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                <FilterButton
                    text={"Daily"}
                    backgroundColor={colors.lightPrimary}
                    textColor={colors.accent}
                />
                <FilterButton
                    text={'Weekly'}
                    backgroundColor={colors.lightSecondary}
                    textColor={colors.secondary}
                />
                <FilterButton
                    text={'Monthly'}
                    backgroundColor={colors.lightWarning}
                    textColor={colors.warning}
                />
            </View>
            <FilterButton
                leftIcon={icons.filter}
                text={'Filter By'}
                backgroundColor={colors.primary}
                textColor={colors.white}
            />
        </View>
    )
}


function FilterButton({ backgroundColor, textColor, text, leftIcon }) {
    return (
        <TouchableOpacity style={{
            padding: ms(5),
            margin: ms(5),
            backgroundColor: backgroundColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: ms(2),
        }}>
            {
                leftIcon ? <Image
                    source={leftIcon}
                    style={{
                        width: ms(15),
                        height: ms(15),
                        marginHorizontal: 2,
                        tintColor: colors.white
                    }}
                /> : null
            }
            <Text
                style={{
                    ...fontSizes.h6,
                    color: textColor,
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}