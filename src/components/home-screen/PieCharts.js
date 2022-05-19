import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";
import { colors, fontSizes } from '../../constants';
import { pieData, pieData2, pieData3, pieData4 } from '../../data';
import { ms, vs } from '../../utils';



export default function PieCharts() {

    return (
        <View>
            <View style={styles.container}>
                <SingleChart
                    status={'completed'}
                    pieData={pieData}
                    value={pieData[0].value}
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
            <View style={styles.pieRowContainer}>
                <View style={styles.pieRow}>
                    <SingleChart innerCircleColor={colors.primary} value={pieData2[0].value} radius={40} pieData={pieData2} status={'Target'} />
                    <SingleChart radius={40} pieData={pieData3} value={pieData3[0].value} status={'Achieved'} />
                    <SingleChart innerCircleColor={colors.danger} value={pieData4[0].value} radius={40} pieData={pieData4} status={'Gap'} />
                </View>
                <View style={styles.textWithMoneyRow}>
                    <TextWithMoney text1='Target' text2='BDT 170,000' />
                    <TextWithMoney text1='Fulfilled' text2='BDT 120,000' />
                </View>
            </View>
        </View>
    );
}

function SingleChart({ radius = 50, innerCircleColor = colors.secondary, pieData = [], status = '', value = "", fontSize = 10 }) {
    let height = (radius / 3) * 5;
    return (
        <PieChart
            donut
            radius={radius}
            innerRadius={radius - 3}
            data={pieData}
            centerLabelComponent={() => {
                return (
                    <View style={styles.pieChartInner(innerCircleColor, height)}>
                        <Text style={{ ...fontSizes.h7, color: colors.white, fontWeight: 'bold' }}>{value}</Text>
                        <Text style={{ ...fontSizes.h7, color: colors.white }}>{status}</Text>
                    </View>
                )
            }}
        />
    )
}
function TextWithColor({ color, text1, text2 }) {
    return (
        <View
            style={styles.textWithColor}
        >
            <View style={styles.box(color)} />
            <View style={styles.boxTextRow}>
                <View style={{ width: ms(90) }}>
                    <Text style={styles.boxText}>
                        {text1}
                    </Text>
                </View>
                <Text style={styles.boxText2}>
                    {text2}
                </Text>
            </View>

        </View>
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: ms(20),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
    },
    pieRowContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
        marginVertical: vs(10),
        paddingVertical: vs(5),
    },
    pieRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ms(10),
    },
    textWithMoneyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ms(10),
    },
    pieChartInner: (innerCircleColor, height) => ({
        backgroundColor: innerCircleColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: height,
        height: height,
        borderRadius: height * 2
    }),
    textWithColor: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: ms(10),
        marginHorizontal: ms(5),
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.border,
    },
    box: (color) => ({
        justifyContent: 'space-between',
        height: 14,
        width: 14,
        backgroundColor: color || colors.secondary,
    }),
    boxText: {
        ...fontSizes.h6,
        fontWeight: '500',
        opacity: .7,
        marginHorizontal: ms(10),
    },
    boxText2: {
        alignSelf: 'flex-end',
        ...fontSizes.h7,
        opacity: .7
    },
    boxTextRow: {
        alignItems: 'center',
        flexDirection: 'row',
    }
})