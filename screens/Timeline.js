import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Timeline from 'react-native-timeline-listview'

class Timehistory extends Component {
  constructor(props){
    super(props);
    color = props.data.colors.color4;
    this.data = [];
    this.props.data.cigarettes.forEach(el => {
      let clockTime = el.time.slice(11,16);
      let split = clockTime.split(':');

      this.data.push({
        time: el.time.slice(11,16),
        title: el.title, description: 
        el.description, lineColor:'#009688', 
        icon: require('./images/cigarette.png'),
        lineColor:"rgba(225, 232, 240)" })
    });
  } 
  render() {
    styles = StyleSheet.create({
      inputContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      overlayContainer: {
        flex: 1,
        backgroundColor: color + '40',
      },
      container: {
        flex: 1,
        padding: 20,
        paddingTop:65,
        backgroundColor: color + '40'
      },
      list: {
        flex: 1,
        marginTop:20
      },
    });
    return (
      <ImageBackground style={styles.inputContainer} source={require('./images/inputSmoke.jpg')}>
        <View style={styles.overlayContainer}>
            <View style={styles.container}>
              <Timeline 
                style={styles.list}
                data={this.data}
                circleSize={20}
                circleColor='rgba(0,0,0,0)'
                lineColor='rgb(45,156,219)'
                timeContainerStyle={{minWidth:52, marginTop: -5}}
                detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "rgba(225, 232, 240, 0.6)", borderRadius: 10}}
                timeStyle={{textAlign: 'center', backgroundColor:this.props.data.colors.color1, color:'white', padding:8, borderRadius:20}}
                descriptionStyle={{color:'gray'}}
                options={{
                  style:{paddingTop:5}
                }}
                innerCircle={'icon'}
            />
          </View>
         </View>
      </ImageBackground>
    )
  }
}
export default Timehistory;