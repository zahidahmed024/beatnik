import React from 'react';
import { Text, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import { colors, fontSizes } from '../../constants';
import { ms, vs } from '../../utils';
import { pieData } from '../../data';


export default function PieCharts() {

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: ms(20),
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: colors.border,
            }}>
                <SingleChart
                    status={'completed'}
                    pieData={pieData}
                    radius={55}
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
            <View style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: colors.border,
                marginVertical: vs(10),
                paddingVertical: vs(5),
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: ms(10),
                }}>
                    <SingleChart innerCircleColor={colors.primary} radius={40} pieData={pieData} status={'Target'} />
                    <SingleChart radius={40} pieData={pieData} status={'Achieved'} />
                    <SingleChart innerCircleColor={colors.danger} radius={40} pieData={pieData} status={'Gap'} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: ms(10),
                }}>
                    <TextWithMoney text1='Target' text2='BDT 170,000' />
                    <TextWithMoney text1='Fulfilled' text2='BDT 120,000' />
                </View>
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
                height: 14,
                width: 14,
                backgroundColor: color || colors.secondary,
            }} />
            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                <View style={{ width: ms(90) }}>
                    <Text style={{
                        ...fontSizes.h6,
                        fontWeight: '500',
                        opacity: .7,
                        marginHorizontal: ms(10),
                    }}>
                        {text1}
                    </Text>
                </View>
                <Text style={{ alignSelf: 'flex-end', ...fontSizes.h7, opacity: .7 }}>
                    {text2}
                </Text>
            </View>

        </View>
    )
}


function SingleChart({ radius = 50, innerCircleColor = colors.secondary, pieData = [], status = '', fontSize = 10 }) {
    let height = (radius / 3) * 5;
    return (
        <PieChart
            donut
            radius={radius}
            innerRadius={radius - 3}
            data={pieData}
            centerLabelComponent={() => {
                return (
                    <View style={{
                        backgroundColor: innerCircleColor,
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

function TextWithMoney({ text1 = "", text2 = "" }) {
    return (
        <View style={{
            paddingVertical: ms(15)
        }}>
            <Text style={{ ...fontSizes.h6, fontWeight: '600', paddingBottom: vs(5), color: colors.primary }}>{text1}</Text>
            <Text style={{ ...fontSizes.h4, fontWeight: 'bold' }}>{text2}</Text>
        </View>
    )
}