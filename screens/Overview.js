import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { AirbnbRating } from 'react-native-ratings';

import Menu from '../Menu';

const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];

const average = (data) => {
  let sum = 0;
  data.forEach(el => {
    sum += el.rating;
  });
  return sum/data.length;
}
const Overview = props => {
  const color = props.data.colors.color1;
  let data = props.data.cigarettes;
  let year = '';
  let month = '';
  let day = '';
  let clock = '';
  let avgRating = 0;
  if (data.length > 1) {
    const date = data[data.length-1].time;
    year = date.slice(0,4);
    month = months[parseInt(date.slice(5,7))-1];
    day = date.slice(8,10)+'.';
    clock = date.slice(11,16);
    avgRating = average(data);
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    overlayContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: color + '40',
      alignItems: "center",
      justifyContent: "center"
    },
    totalAmount: {
      flex: 1,
      margin: 10,
      width: "80%",
      borderRadius: 20
    },
    stressRating: {
      flex: 1,
      margin: 10,
      width: "80%",
      backgroundColor: color + '40',
      borderRadius: 20,
      alignItems: "center"
    },
    textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: color + '40',
      borderRadius: 20,
      padding: 15,
      margin: 10,
    },
    textProps: {
      fontSize: 18,
    },
    textProps2: {
      fontSize: 18,
      marginTop: 20
    }
  });
  return (
    <ImageBackground style={styles.container} source={require('./images/backSmoke.jpg')}>
      <View style={styles.overlayContainer}>
      <Menu addColorHandler={props.addColorHandler}/>
        <View style={styles.totalAmount}>
          <View style={styles.textContainer}>
            <Image source={require('./images/cigarette.png')} style={{width: 70, height: 70}} />
            <Text style={{fontSize: 22, marginTop: 25}}>Total:</Text><Text style={{fontSize: 22, marginTop: 25}}>{data.length}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textProps}>Money smoked:</Text><Text style={styles.textProps}>{Math.round(data.length*0.28*100)/100} €</Text>
            </View>
          <View style={styles.textContainer}>
            <Text style={styles.textProps}>Last Cigarette:</Text><Text style={styles.textProps}>{`${day} ${month} ${year}`}{"\n"}            {clock}</Text>
          </View>
        </View>
        <View style={styles.stressRating}>
          <AirbnbRating
            reviews={["very bad", "bad", "ok", "good", "very good"]}
            readonly={true}
            ratingCount={5}
            defaultRating={Math.round(avgRating)}
            isDisabled={true}
            imageSize={50}
          />
            <Text style={styles.textProps}>Average wellbeing</Text>
            <Text style={{fontSize: 22, margin: 5, marginTop: 14}}>{data[data.length-1].title}</Text>
            <ScrollView style={{margin: 5}}>
              <Text style={styles.textProps}>{data[data.length-1].description}</Text>
            </ScrollView>
        </View>
      </View>
    </ImageBackground>
  )
}


export default Overview;