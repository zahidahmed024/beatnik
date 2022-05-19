import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text } from 'react-native';
import { Layout, TopBarComponent } from '../components';
import { routes } from '../constants';
import { PolicyScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

export default function PolicyNavigations() {
    return (
        <Layout
            title={'Policy list'}
        >
            <Tab.Navigator
                // screenOptions={{
                //     tabBarScrollEnabled: true,
                // }}
                // showPageIndicator
                tabBar={(props) => <TopBarComponent {...props} />}
            >
                <Tab.Screen name={routes.life} component={PolicyScreen} />
                <Tab.Screen name={routes.health} component={DummyScreen} />
                <Tab.Screen name={routes.travel} component={DummyScreen} />
                <Tab.Screen name={routes.motor} component={DummyScreen} />
                <Tab.Screen name={routes.device} component={DummyScreen} />
                <Tab.Screen name={routes.other} component={DummyScreen} />
                <Tab.Screen name={routes.other2} component={DummyScreen} />
                <Tab.Screen name={routes.other3} component={DummyScreen} />
            </Tab.Navigator>
        </Layout >
    );
}


/////dummy screen for tab

function DummyScreen() {
    return <Text>dummy text</Text>
}