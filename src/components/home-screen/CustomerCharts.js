import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { colors, fontSizes, strings } from '../../constants';
import { ms, vs } from '../../utils';
import { customerChartData } from '../../data'

export default function CustomerCharts() {

    const allChartData = generateChartData(customerChartData)

    return (
        <View style={{
            paddingTop: ms(20),
            justifyContent: 'center',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.border
        }}>
            <Text
                style={{
                    ...fontSizes.h4,
                    fontWeight: '600',
                    color: colors.primary
                }}
            >{strings.customer_management}</Text>
            <BarChart
                // hideYAxisText={true}
                yAxisTextStyle={{
                    width: 100,
                    ...fontSizes.h7,
                    opacity: 0.6,
                    transform: [{ rotate: '-90deg' }]
                }}
                hideRules={true}
                height={300}
                horizontal={true}
                barWidth={22}
                // sideWidth={10}
                noOfSections={10}
                barBorderRadius={4}
                frontColor="lightgray"
                data={allChartData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};

const generateChartData = (items = []) => {
    return items.map((item, index) => {
        return {
            value: item.value, frontColor: item.frontColor,
            topLabelComponent: () => (
                <Text style={{
                    ...fontSizes.h7,
                    // color: 'blue',
                    width: ms(200),
                    letterSpacing: 0.8,
                    marginTop: vs(5),
                    textAlign: 'left',
                    marginLeft: 60 + 67,
                    paddingBottom: 20
                }}>
                    <Text
                        style={{
                            ...fontSizes.h7,
                            color: colors.white,
                        }}
                    >
                        ({item.value}) {''}
                    </Text>
                    {''} {item.status}
                </Text >
            ),
        }
    })
}