import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimeLine from 'react-native-timeline-theme';

const data = [
  {
    title: 'Wake up',
    description: 'Remember tooth brushing and read notes on the tablet',
    time: new Date("March 6, 2018 6:15:00"),
  },
  {
    title: 'Eatting',
    description: 'Eat breakfast: bread and drink milk',
    time: new Date("March 6, 2018 7:00:00"),
  },
  {
    title: 'Working',
    description: 'Go to ABX Company and working react-native',
    time: new Date("March 6, 2018 7:35:00"),
  },
  {
    title: 'Relax',
    description: 'Listen to music "Hello Vietnam" song',
    time: new Date("March 6, 2018 14:15:00"),
  },
]
// create a component
class TimeLineIcon extends Component {

  render () {
    return(
      <TimeLine
      data={data}
      isRenderSeperator
      columnFormat={'two-column'}
    />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default TimeLineIcon;
