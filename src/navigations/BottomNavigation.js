import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { icons } from '../assets';
import { colors } from '../constants';
import { AccountScreen, HomeScreen, PolicyScreen } from '../screens';

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
            // tabBarOptions={{
            //     // keyboardHidesTabBar: true
            //  }}         
            >
                <Tab.Screen name="Policy" component={PolicyScreen}
                    options={{
                        tabBarLabel: 'Policy',
                        tabBarIcon: ({ color, size, focused }) => (
                            <TabIcon
                                icon={icons.policy}
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Calculator" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Calculator',
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
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <View style={{
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
                            }}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 30,
                                    marginBottom: 30,
                                }}>
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
                    name="Home" component={HomeScreen} />
                <Tab.Screen name="Account" component={AccountScreen}
                    options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon
                                icon={icons.user}
                                size={size}
                                color={color}
                            />
                        )
                    }} />
                <Tab.Screen name="Campaign" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Campaign',
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

function SettingsScreen() {
    return <Text>dummy</Text>
}

function TabIcon({ icon, size, color }) {
    return (
        <Image
            style={{
                height: size,
                width: size,
                padding: 5,
                // tintColor: color
            }}
            source={icon}
        />
    )
}