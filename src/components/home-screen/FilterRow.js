import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes } from '../../constants'
import { ms } from '../../utils'

export default function FilterRow() {
    return (
        <View style={styles.container}>
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
        <TouchableOpacity style={styles.itemContainer(backgroundColor)}>
            {
                leftIcon ? <Image
                    source={leftIcon}
                    style={styles.itemImage}
                /> : null
            }
            <Text
                style={{
                    ...fontSizes.h7,
                    fontWeight: '500',
                    color: textColor,
                }}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: ms(10),
        paddingBottom: ms(15),
    },
    itemContainer: (backgroundColor) => ({
        padding: ms(5),
        margin: ms(5),
        backgroundColor: backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: ms(2),
    }),
    itemImage: {
        width: ms(12),
        height: ms(12),
        marginHorizontal: ms(3),
        tintColor: colors.white
    }
})