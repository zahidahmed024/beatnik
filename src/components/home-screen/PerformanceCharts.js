import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';

export default GroupedBars = () => {
    const initialData = [
        {
            id: '1',
            value: 40,
            label: 'Jan',
            price: '40k'
        },
        {
            id: '2',
            value: 50,
            label: 'Feb',
            price: '80k'
        },
        {
            id: '3',
            value: 34,
            label: 'Jan',
            price: '40k'
        },
        {
            id: '3',
            value: 34,
            label: 'Jan',
            price: '40k'
        },
        {
            id: '3',
            value: 34,
            label: 'Jan',
            price: '40k'
        },
        {
            id: '3',
            value: 34,
            label: 'Jan',
            price: '40k'
        },

    ]


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

    const allChartData = generateChartData(initialData)

    // console.log('alldata', allChartData)

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
                        Target
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
                        Acheived
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
            >Performance Analysis</Text>
            {renderTitle()}
            <View style={{
                alignSelf: 'center',
                marginLeft: ms(-40),
            }}>
                <BarChart
                    data={allChartData}
                    isAnimated
                    // dataPointsShape="circular"
                    // showLine={true0}
                    // showBarTops={true}
                    // dataPointText="dasasdasdas"
                    // referenceLine1Position={0}
                    // verticalLinesUptoDataPoint={true}
                    // xAxisLabelTextStyle={{ color: 'red' }}
                    yAxisLabelSuffix={' k'}
                    barWidth={20}
                    spacing={24}
                    roundedTop
                    // roundedBottom
                    hideRules
                    xAxisThickness={.5}
                    xAxisLabelTextStyle={{
                        color: 'white',
                    }}
                    yAxisThickness={.2}
                    yAxisTextStyle={{ ...fontSizes.h7, fontWeight: '300' }}
                    // labelsExtraHeight={43}
                    // referenceLine1Position={12}
                    // hideYAxisText={false}
                    // showYAxisIndices={true}
                    noOfSections={3}
                    maxValue={75}
                />
            </View>
        </View>
    );
};
