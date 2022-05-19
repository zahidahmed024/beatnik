import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { icons } from '../../assets/index';
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';

function Layout({ children, isDashboard = false, title, containerStyle }) {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colors.accent} barStyle="dark-content" />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#42c5f5', '#0096FF']}
            >
                <View style={style.bar}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        {
                            isDashboard ? (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        source={icons.propic}
                                        style={{
                                            height: 34,
                                            width: 34,
                                            borderRadius: 20,
                                        }}
                                    />
                                    <View style={{
                                        paddingHorizontal: ms(10),
                                    }}>
                                        <Text style={{ ...fontSizes.h7, fontWeight: '700', marginVertical: vs(3), color: colors.white }}>Hi ,Sam</Text>
                                        <Text style={{ ...fontSizes.h7, fontWeight: '700', color: colors.white }}>HSDK12412312412321</Text>
                                    </View>
                                </View>

                            ) : (
                                <View></View>
                            )

                        }
                        <View style={style.titleContainer}>
                            <Text style={style.titleText}>{title}</Text>
                        </View>
                    </View>
                    <View
                        style={style.rightContent}>
                        <Image source={icons.notification} style={style.leftButton} />
                        {
                            !isDashboard ? <Image source={icons.user} style={[style.leftButton, { marginLeft: ms(10) }]} /> : null
                        }
                    </View>
                </View>
            </LinearGradient>
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
        // margingLeft: ms(20),
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
        justifyContent: 'flex-end',
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
