import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';
const Input = ({ onChangeText, label = '', keyboardType = "default", autoCapitalize = 'none', error = null, ...rest }, ref) => {
    return (
        <View
            style={[
                styles.container,
                rest.style,
            ]}>
            {label ? (
                <Text
                    style={styles.label}>
                    {label}
                </Text>
            ) : null}
            <TextInput
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                {...rest}
                style={[
                    styles.inputStyle,
                    rest.inputStyle,
                ]}
                ref={ref}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default React.forwardRef(Input);


const styles = StyleSheet.create({
    container: {
        marginHorizontal: ms(20),
        marginVertical: vs(6),
    },
    label: {
        ...fontSizes.h7,
        fontWeight: 'bold',
        paddingVertical: vs(8),
        // marginVertical: vs(4)
    },
    inputStyle: {
        height: vs(40),
        width: ms(310),
        alignSelf: 'center',
        borderWidth: 1,
        color: colors.text,
        backgroundColor: colors.white,
        borderColor: colors.border,
        borderRadius: ms(8),
        paddingHorizontal: ms(15),
    }
})