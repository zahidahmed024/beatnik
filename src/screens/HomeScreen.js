import React from 'react'
import { ScrollView } from 'react-native'
import { CustomerCharts, FilterRow, Layout, PerformanceCharts, PieCharts } from '../components'

export default function HomeScreen() {
    return (
        <Layout
            isDashboard={true}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <FilterRow />
                <PieCharts />
                <CustomerCharts />
                <PerformanceCharts />
            </ScrollView>
        </Layout>
    )
}

