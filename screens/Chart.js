import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { ContributionGraph } from 'react-native-chart-kit'

const commitsData = [];

const chartConfig = {
  backgroundGradientFrom: 'rgba(249, 240, 175, 0.2)',
  backgroundGradientTo: 'rgba(249, 240, 175, 0.2)',
  color: (opacity = 1) => `rgba(77, 57, 44, ${opacity})`,
  strokeWidth: 2
}

const Chart = (props) => {
  props.data.cigarettes.forEach(el => {
    let time = el.time.slice(0,10)
    var index = commitsData.map(function(e) { return e.date; }).indexOf(time);
    if (index >= 0) commitsData[index].count++;
    else commitsData.push({date: time, count: 0});
  });
  return (
    
  <ImageBackground style={styles.container} source={require('./images/backSmoke.jpg')}>
    <View style={styles.overlayContainer}>
      <View style={{marginTop: "10%"}}>
        <View style={{alignItems: "center", margin: 20}}>
          <Text style={{fontSize: 22}}>Cigarette Contributions</Text>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    backgroundColor: "rgba(249, 240, 175,0.4)",
  }
});
export default Chart;