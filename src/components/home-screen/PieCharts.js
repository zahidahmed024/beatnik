import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import { colors, fontSizes } from '../../constants';
import { ms } from '../../utlis';

export default function PieCharts() {
    const pieData = [
        { value: 70, color: colors.secondary },
        { value: 30, color: colors.danger }
    ];
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: ms(20)
            }}>
                <SingleChart
                    status={'completed'}
                    pieData={pieData}
                    radius={60}
                    fontSize={14}
                />
                <View>
                    <TextWithColor
                        color={colors.primary}
                        text1={"Target"}
                        text2={"BDT 170,000tk"}
                    />
                    <TextWithColor
                        color={colors.secondary}
                        text1={"Achieved"}
                        text2={"BDT 170,000tk"}
                    />
                    <TextWithColor
                        color={colors.danger}
                        text1={"Gap"}
                        text2={"BDT 170,000tk"}
                    />
                </View>
            </View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: ms(10) }}>
                <SingleChart radius={50} pieData={pieData} status={'Target'} />
                <SingleChart radius={50} pieData={pieData} status={'Achieved'} />
                <SingleChart radius={50} pieData={pieData} status={'Gap'} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: ms(10),
            }}>
                <TextWithMoney />
                <TextWithMoney />
            </View>
        </View>
    );
}

function TextWithColor({ color, text1, text2 }) {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: ms(10),
                marginHorizontal: ms(5),
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: colors.border,
            }}
        >
            <View style={{
                justifyContent: 'space-between',
                height: 18,
                width: 18,
                backgroundColor: color || colors.secondary,
            }} />
            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                <View style={{ width: ms(90) }}>
                    <Text style={{
                        ...fontSizes.h5,
                        marginHorizontal: ms(10),
                    }}>
                        {text1}
                    </Text>
                </View>
                <Text style={{ alignSelf: 'flex-end' }}>
                    {text2}
                </Text>
            </View>

        </View>
    )
}


function SingleChart({ radius = 50, pieData = [], status = '', fontSize = 10 }) {
    let height = (radius / 3) * 5;
    return (
        <PieChart
            donut
            radius={radius}
            innerRadius={radius - 5}
            data={pieData}
            centerLabelComponent={() => {
                return (
                    <View style={{
                        backgroundColor: colors.secondary,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: height,
                        height: height,
                        borderRadius: height * 2
                    }}>
                        <Text style={{ fontSize: fontSize, color: colors.white, fontWeight: 'bold' }}>70%</Text>
                        <Text style={{ fontSize: fontSize, color: colors.white }}>{status}</Text>
                    </View>
                )

            }}
        />
    )
}

function TextWithMoney() {
    return (
        <View style={{
            paddingVertical: ms(15)
        }}>
            <Text style={{ ...fontSizes.h5, fontWeight: 'bold', color: colors.primary }}>Target</Text>
            <Text style={{ ...fontSizes.h3, fontWeight: 'bold' }}>BDT 170,000</Text>
        </View>
    )
}