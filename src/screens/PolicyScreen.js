import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text } from 'react-native';
import { Layout, PolicyFlatlist, TopBarComponent } from '../components';

const Tab = createMaterialTopTabNavigator();

function PolicyScreen() {
    return (
        <PolicyFlatlist />
    )
}




export default function MyTabs() {
    return (
        <Layout>
            <Tab.Navigator
                // screenOptions={{
                //     tabBarScrollEnabled: true,

                // }
                // }
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