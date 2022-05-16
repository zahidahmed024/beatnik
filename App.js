import React from "react";
import { StyleSheet } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";


const data = [
  { quarter: 1, earnings: 23000, label: "23000" },
  { quarter: 2, earnings: 16500, label: "23000" },
  { quarter: 3, earnings: 14250, label: "23000" },
  { quarter: 4, earnings: 19000, label: "23000" }
];
const data2 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];
const data3 = [
  "0.362743", "0.357969", "0.356322", "0.355757", "0.358511",
  "0.357218", "0.356696", "0.354579", "0.828295", "0.391186",
  "0.378577", "0.39372", "0.396416", "0.395641", "0.37573",
];

export default class App extends React.Component {
  render() {
    // return (
    //   <View
    //     style={{ flex: 1, justifyContent: 'center', }}
    //   >
    //     {/* <Text>sasdas</Text> */}
    //     {/* <VictoryLabel x={25} y={24} style={{
    //       textAnchor: "start",
    //       verticalAnchor: "end",
    //       fill: "#000000",
    //       // fontFamily: "inherit",
    //       fontSize: "18px",
    //       fontWeight: "bold"
    //     }}
    //       text="An outlook"
    //     />
    //     <VictoryChart
    //       // domainPadding will add space to each side of VictoryBar to
    //       // prevent it from overlapping the axis
    //       domainPadding={50}
    //     >
    //       <VictoryAxis
    //         // tickValues specifies both the number of ticks and where
    //         // they are placed on the axis
    //         tickValues={[1, 2, 3, 4]}
    //         tickFormat={["march", "april", "may", "june"]}
    //       />
    //       <VictoryAxis
    //         dependentAxis
    //         // tickFormat specifies how ticks should be displayed
    //         tickFormat={(x) => (`$${x / 1000}k`)}
    //       />
    //       <VictoryBar
    //         alignment="end"
    //         data={data}
    //         x="quarter"
    //         y="earnings"
    //       />
    //       <VictoryBar
    //         alignment="start"
    //         style={{
    //           data: {
    //             fill: "red"
    //           }
    //         }}
    //         data={data2}
    //         x="quarter"
    //         y="earnings"
    //       />

    //       <VictoryBar horizontal
    //         style={{
    //           data: { fill: "#c43a31" }
    //         }}
    //         data={data}
    //       />
    //     </VictoryChart> */}


    //     <ProgressCircle
    //       strokeWidth={5}
    //       style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}
    //       progress={0.8}
    //       progressColor={'rgb(134, 65, 244)'}
    //       backgroundColor={'red'}
    //     >
    //       <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
    //         <Text>dfafad</Text>
    //       </View>
    //     </ProgressCircle>

    //   </View>
    // );
    const data1 = [14, -1, 100, -95, -94, -24, -8, 85, -91,]
      .map((value) => ({ value }))
    const data2 = [24, 28, 93, 77, -42, -62, 52, -87, 21]
      .map((value) => ({ value }))

    const barData = [
      {
        data: data1,
        svg: {
          fill: 'rgb(134, 65, 244)',
        },
      },
      {
        data: data2,
      },
    ]

    return (
      <BarChart
        style={{ height: 200 }}
        data={barData}
        yAccessor={({ item }) => item.value}
        svg={{
          fill: 'green',
        }}
        contentInset={{ top: 30, bottom: 30 }}
        {...this.props}
      >
        <Grid 
        svg={{
          stroke: 'rgb(134, 65, 244)',
        }}
        />
      </BarChart>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});