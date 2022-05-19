import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';


export default function BarCharts() {
    const initialData = [
        { value: 60, frontColor: colors.danger, status: 'Premium pending' },
        { value: 110, frontColor: colors.secondary, status: 'Regular customer' },
        { value: 50, frontColor: colors.lightWarning, status: 'Payment pending' },
        { value: 100, frontColor: colors.text, status: 'Puchased' },
        { value: 150, frontColor: colors.primary, status: 'Recommanded' },
        { value: 200, frontColor: colors.warning, status: 'Registered' },
    ];
    const generateChartData = (items = []) => {
        return items.map((item, index) => {
            return {
                value: item.value, frontColor: item.frontColor,
                topLabelComponent: () => (
                    <Text style={{
                        ...fontSizes.h7,
                        // color: 'blue',
                        width: ms(190),
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
                            ({item.value}){''}
                        </Text>
                        {item.status}
                    </Text >
                ),
            }
        })
    }
    const allChartData = generateChartData(initialData)
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
            >Customer Management</Text>
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