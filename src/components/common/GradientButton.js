import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utils';

export default function GradientButton({ title, isGradient = true }) {
    return (
        <TouchableOpacity>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[isGradient ? '#26de57' : colors.white, isGradient ? colors.secondary : colors.white]}
                style={styles.linearGradient}>
                <Text style={styles.buttonText(isGradient)}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        paddingVertical: ms(7),
        paddingHorizontal: ms(20),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: ms(15),
    },
    buttonText: (isGradient) => ({
        ...fontSizes.h7,
        textAlign: 'center',
        color: isGradient ? colors.white : colors.secondary,
        // backgroundColor: 'transparent',
    }),
});