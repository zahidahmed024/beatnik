import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { Layout, PolicyFlatlist, SearchInput, Switch, TopBarComponent } from '../components';
import { colors } from '../constants';
import { vs } from '../utils';

const Tab = createMaterialTopTabNavigator();

function PolicyScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View
                style={{
                    // flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    paddingVertical: vs(10),
                }}
            >
                <SearchInput
                    placeholder={"Search here...."}
                />
                <Switch />
            </View>
            <PolicyFlatlist />
        </View>
    )
}




export default function MyTabs() {
    return (
        <Layout
            title={'Policy list'}
        >
            <Tab.Navigator
                // screenOptions={{
                //     tabBarScrollEnabled: true,
                // }}
                showPageIndicator
                tabBar={(props) => <TopBarComponent {...props} />}
            >
                <Tab.Screen name="Life" component={PolicyScreen} />
                <Tab.Screen name="Health" component={DummyScreen} />
                <Tab.Screen name="Travel" component={DummyScreen} />
                <Tab.Screen name="Motor" component={DummyScreen} />
                <Tab.Screen name="Device" component={DummyScreen} />
                <Tab.Screen name="others" component={DummyScreen} />
                <Tab.Screen name="others2" component={DummyScreen} />
                <Tab.Screen name="others3" component={DummyScreen} />
            </Tab.Navigator>
        </Layout >
    );
}

function DummyScreen() {
    return <Text>dummy text</Text>
}