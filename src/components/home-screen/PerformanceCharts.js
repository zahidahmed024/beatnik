import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { colors, fontSizes, strings } from '../../constants';
import { ms, vs } from '../../utils';
import { performanceData } from '../../data'



export default function PerformanceCharts() {

    const allChartData = generateChartData(performanceData)

    const renderTitle = () => {
        return (
            <View style={{
                alignSelf: 'flex-end',
                marginBottom: vs(-30),
                marginRight: ms(40)
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: vs(10) }}>
                    <View
                        style={{
                            height: 12,
                            width: 12,
                            backgroundColor: colors.primary,
                            marginRight: 8,
                        }}
                    />
                    <Text
                        style={{
                            ...fontSizes.h7
                        }}>
                        {strings.target}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            height: 12,
                            width: 12,
                            backgroundColor: colors.secondary,
                            marginRight: 8,
                        }}
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

    return (
        <View
            style={{
                marginVertical: vs(12),
                paddingVertical: vs(20),
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: colors.border,
                borderRadius: 10,
            }}>
            <Text
                style={{
                    ...fontSizes.h4,
                    fontWeight: '600',
                    color: colors.primary,
                    paddingBottom: vs(20)
                }}
            >{strings.performance_analysis}</Text>
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
        </View>
    );
};

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