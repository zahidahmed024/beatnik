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
        <View>
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
                <SingleChart pieData={pieData} />
                <SingleChart pieData={pieData} />
                <SingleChart pieData={pieData} />
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


function SingleChart({ pieData }) {
    return (
        <PieChart
            donut
            radius={35}
            innerRadius={30}
            data={pieData}
            centerLabelComponent={() => {
                return (
                    <View style={{ backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center', width: 50, height: 50, borderRadius: 50 }}>
                        <Text style={{ fontSize: 10, color: colors.white, fontWeight: 'bold' }}>70%</Text>
                        <Text style={{ fontSize: 10, color: colors.white }}>Completed</Text>
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