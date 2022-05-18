import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from "react-native-gifted-charts";
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utlis';


export default function BarCharts() {
    const barData = [
        { value: 10, frontColor: colors.danger },
        { value: 210, frontColor: colors.secondary },
        { value: 21, frontColor: colors.lightPrimary },
        { value: 161, frontColor: colors.text },
        { value: 200, frontColor: colors.primary },
        { value: 216, frontColor: colors.warning },
    ];
    return (
        <View style={{
            // backgroundColor: 'red',
            padding: ms(20),
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.border
        }}>
            <Text
                style={{
                    ...fontSizes.h2,
                    color: colors.primary
                }}
            >Customer Management</Text>
            <BarChart
                // hideYAxisText={true}

                height={300}
                horizontal={true}
                barWidth={22}
                // sideWidth={10}
                noOfSections={10}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};