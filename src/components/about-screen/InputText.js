import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';
const Input = ({ onChangeText, label = '', keyboardType = "default", autoCapitalize = 'none', error = null, ...rest }, ref) => {
    return (
        <View
            style={[
                {
                    marginHorizontal: ms(20),
                    marginVertical: vs(6),
                },
                rest.style,
            ]}>
            {label ? (
                <Text
                    style={{
                        ...fontSizes.h7,
                        fontWeight: 'bold',
                        paddingVertical: vs(8),
                        // marginVertical: vs(4)
                    }}>
                    {label}
                </Text>
            ) : null}
            <TextInput
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                {...rest}
                style={[
                    {
                        height: vs(40),
                        width: ms(310),
                        alignSelf: 'center',
                        borderWidth: 1,
                        color: colors.text,
                        backgroundColor: colors.white,
                        borderColor: colors.border,
                        borderRadius: ms(8),
                        paddingHorizontal: ms(15),
                    },
                    rest.inputStyle,
                ]}
                ref={ref}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default React.forwardRef(Input);
