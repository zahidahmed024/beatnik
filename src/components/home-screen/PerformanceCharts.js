import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { colors } from '../../constants';

export default GroupedBars = () => {
    const barData = [
        {
            value: 40,
            label: 'Jan',
            spacing: 2,
            labelWidth: 30,
            price: '40k',
            labelTextStyle: { color: 'gray' },
            frontColor: '#177AD5',
        },
        { value: 20, frontColor: '#ED6665' },
        {
            value: 50,
            label: 'Feb',
            spacing: 2,
            labelWidth: 30,
            dataPointText: '40k',
            labelTextStyle: { color: 'gray' },
            frontColor: '#177AD5',
        },
        { value: 40, frontColor: '#ED6665' },
        {
            value: 75,
            label: 'Mar',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: '#177AD5',
            dataPointText: '40k',
        },
        { value: 25, frontColor: '#ED6665' },
        {
            value: 30,
            label: 'Apr',
            spacing: 2,
            labelWidth: 30,
            labelTextStyle: { color: 'gray' },
            frontColor: '#177AD5',
            dataPointText: '40k',
        },
        { value: 20, frontColor: '#ED6665' },

    ];
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
                frontColor: isOdd ? colors.primary : colors.secondary,
                topLabelComponent: () => (
                    <Text style={{ color: 'blue', fontSize: 16, paddingBottom: 20 }}>{item.value}</Text>
                ),
            }
        })
    }

    const allChartData = generateChartData(initialData)

    console.log('alldata', allChartData)
    const renderTitle = () => {
        return (
            <View style={{ marginVertical: 30 }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    Chart title goes here
                </Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 24,
                        backgroundColor: 'yellow',
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#177AD5',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                width: 60,
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Point 01
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#ED6665',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                width: 60,
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Point 02
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                // backgroundColor: '#333340',
                paddingBottom: 40,
                borderRadius: 10,
            }}>
            {/* {renderTitle()} */}
            <BarChart
                data={allChartData}
                isAnimated
                // dataPointsShape="circular"
                // showLine={true0}
                // dataPointText="dasasdasdas"
                // referenceLine1Position={0}
                // verticalLinesUptoDataPoint={true}
                xAxisLabelTextStyle={{ color: 'red' }}
                yAxisLabelSuffix={'k'}
                barWidth={20}
                spacing={24}
                // roundedTop
                // roundedBottom
                hideRules
                xAxisThickness={0}
                yAxisThickness={0}
                yAxisTextStyle={{ color: 'blue' }}
                // labelsExtraHeight={43}
                // referenceLine1Position={12}
                // hideYAxisText={false}
                // showYAxisIndices={true}
                noOfSections={3}
                maxValue={75}
            />
        </View>
    );
};
