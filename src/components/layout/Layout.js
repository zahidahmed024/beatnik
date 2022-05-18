import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../../assets/index';
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utils';

function Layout({ children, bar = true, leftButton = true, onPressLeft, title, drawer = false, containerStyle }) {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
            <View style={style.bar}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        onPress={() => alert('hallo')}
                        style={{ width: ms(35) }}>
                        <Image source={icons.left_arrow} style={style.leftButton} />
                    </TouchableOpacity>
                    <View style={style.titleContainer}>
                        <Text style={style.titleText}>{title}</Text>
                    </View>
                </View>
                <View
                    style={style.rightContent}>
                    <Image source={icons.notification} style={style.leftButton} />
                    <Image source={icons.user} style={style.leftButton} />
                </View>
            </View>
            <View style={style.bodyWrapper}>
                <View style={[style.body, containerStyle]}>{children}</View>
            </View>
        </SafeAreaView >
    );
}
export default Layout;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accent,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // height: ms(46),
        backgroundColor: colors.white,
        alignItems: 'center',
        padding: ms(10),
        borderBottomWidth: ms(1),
        borderBottomColor: colors.border,
        backgroundColor: colors.green,

    },
    leftButton: {
        width: ms(22),
        height: ms(22),
        tintColor: colors.white,
        // alignItems: 'center',
    },
    titleContainer: {
        // flex: 1,
        // padding: ms(5),
        alignItems: 'center',
        // flexDirection: 'row'
    },
    titleText: {
        ...fontSizes.h4,
        color: colors.white,
    },
    rightContent: {
        width: ms(70),
        padding: ms(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bodyWrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    body: {
        flex: 1,
        padding: ms(10)
    }
});
