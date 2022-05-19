import React, { useRef } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../../assets';
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utils';

export default function TopBarComponent({ state, descriptors, navigation, position }) {
    let scrollRef = useRef()
    return (
        <View style={{
            paddingVertical: ms(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View style={{
                width: '80%'
            }}>
                <ScrollView
                    // contentContainerStyle={{ flexGrow: 1, }}
                    ref={scrollRef}
                    horizontal
                    scrollEnabled={true}
                    // pagingEnabled
                    disableIntervalMomentum={true}
                    // pagingEnabled
                    snapToInterval={20}
                    showsHorizontalScrollIndicator={false}
                    snapToStart={true}
                >
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });
                            // scrollRef?.current?.scrollTo(index,position)

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }

                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{
                                    // flex: 1,
                                    // backgroundColor: isFocused ? colors.secondary : colors.lightSecondary,
                                    // height: vs(23),
                                    textTransform: "none",
                                    padding: ms(8),
                                    borderBottomWidth: 1,
                                    borderBottomColor: isFocused ? colors.primary : colors.white,
                                }}
                            >
                                <Text style={{
                                    ...fontSizes.h5,
                                    fontWeight: '600',
                                    alignSelf: 'center'
                                }}>{label}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
            <Image
                source={icons.rightArrow}
                style={{
                    height: ms(14),
                    width: ms(14),
                }}
            />
        </View>
    );
}