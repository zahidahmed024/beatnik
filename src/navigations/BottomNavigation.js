import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { icons } from '../assets';
import { colors, routes, strings } from '../constants';
import { AccountScreen, HomeScreen, PolicyScreen } from '../screens';
import { vs } from '../utils';
import PolicyNavigations from './PolicyNavigations';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    // tabBarStyle: { height: vs(70) },
                }}
            >
                <Tab.Screen name={routes.policy} component={PolicyNavigations}
                    options={{
                        tabBarLabel: `${strings.policy}`,
                        tabBarIcon: ({ color, size, focused }) => (
                            <TabIcon
                                icon={icons.policy}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name={routes.calculator} component={HomeScreen}
                    options={{
                        tabBarLabel: `${strings.calculator}`,
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon
                                icon={icons.calculator}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name={routes.home} component={HomeScreen}
                    options={{
                        tabBarLabel: `${strings.home}`,
                        tabBarIcon: ({ color, size }) => (
                            <View style={styles.homeButton(size)}>
                                <View style={styles.homeInner}>
                                    <Image
                                        source={icons.home}
                                        style={{
                                            height: size + 30,
                                            width: size + 30,
                                            // tintColor: colors.white,
                                        }}
                                    />
                                </View>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name={routes.account} component={AccountScreen}
                    options={{
                        tabBarLabel: `${strings.account}`,
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon
                                icon={icons.user}
                                size={size}
                                color={color}
                            />
                        )
                    }} />
                <Tab.Screen name={routes.campaign} component={HomeScreen}
                    options={{
                        tabBarLabel: `${strings.campaign}`,
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon
                                icon={icons.campaign}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


function TabIcon({ icon, size, color }) {
    return (
        <Image
            style={{
                height: size,
                width: size,
                padding: 5,
                tintColor: color,
            }}
            source={icon}
        />
    )
}

const styles = StyleSheet.create({

    homeButton: (size) => ({
        width: size + 40,
        height: size + 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 10,
        borderBottomLeftRadius: size + 10,
        borderBottomRightRadius: size + 10,
        borderTopLeftWidth: 0,
        borderTopRightWidth: 0,
        borderColor: colors.border,
        backgroundColor: colors.border
    }),
    homeInner: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 30,
    }

})