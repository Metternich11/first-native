import React from 'react';
import PureChart from 'react-native-pure-chart';

const lineChart = (props) => {
  let data =[];
  props.data.forEach(el => {
    data.push({x: el.date, y: el.count})
  });
  data.sort((a,b) => {
    return (new Date(b.x) - new Date(a.x));
  })
  return (
    <PureChart data={data.reverse()} type='line' />
  )
}

export default lineChart;