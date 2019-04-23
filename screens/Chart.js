import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { ContributionGraph } from 'react-native-chart-kit'

const commitsData = [];


const Chart = (props) => {
  const color = props.data.colors.color3;
  props.data.cigarettes.forEach(el => {
    let time = el.time.slice(0,10)
    var index = commitsData.map(function(e) { return e.date; }).indexOf(time);
    if (index >= 0) commitsData[index].count++;
    else commitsData.push({date: time, count: 0});
  });
  
  const chartConfig = {
    backgroundGradientFrom: color + '10',
    backgroundGradientTo: color + '10',
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
    }
  });
  return (
    
  <ImageBackground style={styles.container} source={require('./images/backSmoke.jpg')}>
    <View style={styles.overlayContainer}>
    <View style={{alignItems: "center", margin: 30}}>
          <Text style={{fontSize: 22}}>Cigarette Contributions</Text>
        </View>
      <View style={{marginTop: "10%"}}>
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
    </View>
  </ImageBackground>
  )
};

export default Chart;