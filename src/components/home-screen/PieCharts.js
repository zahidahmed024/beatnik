import { View, Text, Image } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import React from 'react'
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utlis';

export default function PieCharts() {
    const pieData = [
        { value: 70, color: colors.secondary },
        { value: 30, color: colors.danger }
    ];
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: ms(20)
        }}>
            <PieChart
                donut
                radius={60}
                innerRadius={55}
                data={pieData}
                centerLabelComponent={() => {
                    return (
                        <View style={{ backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center', width: 100, height: 100, borderRadius: 50 }}>
                            <Text style={{ fontSize: 16, color: colors.white, fontWeight: 'bold' }}>70%</Text>
                            <Text style={{ fontSize: 16, color: colors.white }}>Completed</Text>
                        </View>
                    )

                }}
            />
            <View>
                <TextWithColor
                    color={colors.primary}
                    text1={"Target"}
                    text2={"BDT 170,000"}
                />
                <TextWithColor
                    color={colors.secondary}
                    text1={"Achieved"}
                    text2={"BDT 170,000"}
                />
                <TextWithColor
                    color={colors.danger}
                    text1={"Gap"}
                    text2={"BDT 170,000"}
                />
            </View>
        </View >
    );
}

function TextWithColor({ color, text1, text2 }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'red',
                padding: ms(5),
                marginHorizontal: ms(5)
            }}
        >
            <View style={{
                height: 18,
                width: 18,
                backgroundColor: color || colors.secondary,
            }} />
            <View style={{ width: ms(180), flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    ...fontSizes.h5,
                    marginHorizontal: ms(10)
                }}>
                    {text1}
                </Text>
                <Text style={{ textAlign: 'right' }}>
                    {text2}asdasdas
                </Text>
            </View>
        </View>
    )
}