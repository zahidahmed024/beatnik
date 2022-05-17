import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FilterRow, PieCharts } from '../components'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FilterRow />
            <PieCharts />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})