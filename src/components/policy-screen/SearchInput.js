import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { icons } from '../../assets';
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';
const Input = ({ onChangeText, label = '', keyboardType = "default", autoCapitalize = 'none', error = null, ...rest }, ref) => {
    return (
        <View
            style={[
                {
                    // marginHorizontal: ms(20),
                    marginVertical: vs(6),
                },
                rest.style,
            ]}>
            {label ? (
                <Text
                    style={styles.label}>
                    {label}
                </Text>
            ) : null}
            <View style={styles.textContainer}>
                <TextInput
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    {...rest}
                    style={[
                        styles.textInput,
                        rest.inputStyle,
                    ]}
                    ref={ref}
                    onChangeText={onChangeText}
                />
                <Image
                    style={{
                        width: ms(20),
                        height: ms(20),
                    }}
                    source={icons.search}
                />
            </View>
        </View>
    );
};

export default React.forwardRef(Input);

const styles = StyleSheet.create({
    label: {
        ...fontSizes.h7,
        fontWeight: 'bold',
        paddingVertical: vs(8),
        // marginVertical: vs(4)
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: vs(40),
        width: ms(200),
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.lightPrimary,
        borderRadius: ms(8),
        paddingHorizontal: ms(10),
    },
    textInput: {
        flex: 1,
        color: colors.text,
        backgroundColor: colors.white,
        borderColor: colors.border,
        borderRadius: ms(8),
        paddingHorizontal: ms(5),
        backgroundColor: colors.lightPrimary,
    }
})