import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { colors, fontSizes, strings } from '../../constants';
import { performanceData } from '../../data';
import { ms, vs } from '../../utils';

const generateChartData = (items = []) => {
    return items.map((item, index) => {
        let isOdd = index % 2 == 1;
        return {
            value: item.value,
            label: isOdd ? item.label : null,
            spacing: isOdd ? null : 2,
            labelWidth: isOdd ? 30 : null,
            price: item.price,
            labelTextStyle: { color: 'gray' },
            frontColor: isOdd ? colors.secondary : colors.primary,
            topLabelComponent: () => (
                <Text style={{
                    ...fontSizes.h8,
                }}>{item.value}k</Text>
            ),
        }
    })
}

export default function PerformanceCharts() {

    const allChartData = generateChartData(performanceData)

    return (
        <View
            style={styles.container}>
            <Text style={styles.headerText}>{strings.performance_analysis}</Text>
            {renderTitle()}
            <View style={{
                alignSelf: 'center',
                marginLeft: ms(-40),
            }}>
                <BarChart
                    data={allChartData}
                    isAnimated
                    yAxisLabelSuffix={' k'}
                    barWidth={20}
                    spacing={24}
                    roundedTop
                    hideRules
                    xAxisThickness={.5}
                    // xAxisLabelTextStyle={{
                    //     color: 'white',
                    // }}
                    yAxisThickness={.2}
                    yAxisTextStyle={{ ...fontSizes.h7, fontWeight: '300' }}
                    noOfSections={3}
                    maxValue={75}
                />
            </View>
        </View >
    );
};
const renderTitle = () => {
    return (
        <View style={styles.smallContainer}>
            <View style={[styles.boxRow, { marginVertical: vs(10) }]}>
                <View style={styles.smallbox}
                />
                <Text
                    style={{
                        ...fontSizes.h7
                    }}>
                    {strings.target}
                </Text>
            </View>
            <View style={styles.boxRow}>
                <View
                    style={[
                        styles.smallbox,
                        { backgroundColor: colors.secondary }
                    ]}
                />
                <Text
                    style={{
                        ...fontSizes.h7
                    }}>
                    {strings.achieved}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: vs(12),
        paddingVertical: vs(20),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
    },
    headerText: {
        ...fontSizes.h4,
        fontWeight: '600',
        color: colors.primary,
        paddingBottom: vs(20)
    },
    smallContainer: {
        alignSelf: 'flex-end',
        marginBottom: vs(-30),
        marginRight: ms(40)
    },
    smallbox: {
        height: 12,
        width: 12,
        backgroundColor: colors.primary,
        marginRight: 8,
    },
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})