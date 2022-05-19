import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { BarCharts, FilterRow, Layout, PerformanceCharts, PieCharts } from '../components'

export default function HomeScreen() {
    return (
        <Layout
            isDashboard={true}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <FilterRow />
                <PieCharts />
                <BarCharts />
                <PerformanceCharts />
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: ms(20)
    }
})
// yarn add  @react-native-masked-view/masked-view@^0.2.6
// @react-navigation/bottom-tabs@^6.0.9
// @react-navigation/drawer@ ^6.1.8    
// @react-navigation/material-top-tabs@^6.0.6     
// @react-navigation/native@^6.0.6
// @react-navigation/native-stack@^6.2.5     
// @react-navigation/stack"@^6.0.11 