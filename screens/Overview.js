import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

// It's better to have this type of constants in a separate file.
const months = [
  'Jan',
  'Feb',
  'Mär',
  'Apr',
  'Mai',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dez'
];

const average = data => {
  let sum = 0;
  data.forEach(el => (sum += el.rating));
  return sum / data.length;
};

const Overview = props => {
  let data = props.data.cigarettes;
  let year = '';
  let month = '';
  let day = '';
  let clock = '';
  let avgRating = 0;
  if (data.length > 1) {
    const date = data[data.length - 1].time;
    year = date.slice(0, 4);
    month = months[parseInt(date.slice(5, 7)) - 1];
    day = date.slice(8, 10) + '.';
    clock = date.slice(11, 16);
    avgRating = average(data);
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require('./images/backSmoke.jpg')}
    >
      {/* You could get some cleaner code by using StyledComponents (emotion) */}
      <View style={styles.overlayContainer}>
        <View style={styles.totalAmount}>
          <View style={styles.textContainer}>
            <Image
              source={require('./images/cigarette.png')}
              style={{ width: 70, height: 70 }}
            />
            <Text style={styles.textProps2}>Total:</Text>
            <Text style={styles.textProps2}>{data.length}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textProps}>Money smoked:</Text>
            <Text style={styles.textProps}>
              {Math.round(data.length * 0.28 * 100) / 100} €
            </Text>
          </View>
          {/* Third time I see this structure "textContainer" */}
          {/* You can try modularizing it (a presentational component?) */}
          <View style={styles.textContainer}>
            <Text style={styles.textProps}>Last Cigarette:</Text>
            <Text style={styles.textProps}>
              {`${day} ${month} ${year}`}
              {'\n'} {clock}
            </Text>
          </View>
        </View>
        <View style={styles.stressRating}>
          <AirbnbRating
            reviews={['very bad', 'bad', 'ok', 'good', 'very good']}
            readonly={true}
            ratingCount={5}
            defaultRating={Math.round(avgRating)}
            isDisabled={true}
            imageSize={50}
          />
          <Text style={styles.textProps}>Average wellbeing</Text>
          <Text style={{ margin: 25, fontSize: 20 }}>Last Message</Text>
          <Text style={styles.textProps}>{data[data.length - 1].message}</Text>
        </View>
      </View>
      {/* Remove commented code */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(144, 104, 190,0.4)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  totalAmount: {
    flex: 1,
    marginTop: 30,
    margin: 10,
    width: '80%',
    borderRadius: 20
  },
  stressRating: {
    flex: 1,
    margin: 10,
    width: '80%',
    backgroundColor: 'rgba(144, 104, 190,0.4)',
    borderRadius: 20,
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(144, 104, 190,0.4)',
    borderRadius: 20,
    padding: 15,
    margin: 10
  },
  textProps: {
    fontSize: 18
  },
  textProps2: {
    fontSize: 18,
    marginTop: 20
  }
});

export default Overview;
