import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { ContributionGraph } from 'react-native-chart-kit'
import LineChart from './PureChart';
let commitsData = [];


const Chart = (props) => {
  const color = props.data.colors.color3;
  props.data.cigarettes.forEach(el => {
    let time = el.time.slice(0,10)
    var index = commitsData.map(function(e) { return e.date; }).indexOf(time);
    if (index >= 0) commitsData[index].count++;
    else commitsData.push({date: time, count: 1});
  });
  commitsData.sort((a,b) => {
    return (new Date(a.date) - new Date(b.date));
  })

  commitsData.forEach(el => {
    el.count = Math.round(el.count/5);
  })
  console.log(commitsData[0])
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(28, 58, 58, ${opacity})`,
    strokeWidth: 2
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    overlayContainer: {
      backgroundColor: color + '40',
      height: "100%"
    },
    lineChart: {
      height: 180,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
    }
  });
  return (
    
  <ImageBackground style={styles.container} source={require('./images/backSmoke.jpg')}>
    <View style={styles.overlayContainer}>
      <View style={{alignItems: "center", margin: 30}}>
        <Text style={{fontSize: 26, marginTop: 30}}>Cigarette Statistics</Text>
      </View>
      <View style={{marginTop: "10%", flex: 1}}>
        <ContributionGraph
          values={commitsData}
          endDate={new Date()}
          numDays={105}
          width={Dimensions.screenWidth}
          height={220}
          chartConfig={chartConfig}
          style={{flex:1}}
        />
      </View>
      <View style={styles.lineChart}>
        <LineChart data={commitsData} style={{margin: 15}}/>
    </View>
    </View>
  </ImageBackground>
  )
};

export default Chart;