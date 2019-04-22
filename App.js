import React, { Component } from "react";
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import { addCigarette } from './store/actions/index';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';

import Overview from './screens/Overview';
import Input from './screens/Input';
import Chart from './screens/Chart';

// import { LongPressGestureHandler } from 'react-native-gesture-handler';
const Chartscreen = (props) => {
  return ( <Chart data={props}/>)
}
const Homescreen = (props) => {
  return ( <Overview data={props}/> )
}
class InputCigarette extends Component {
  addCigaretteHandler = (message, rated) => {
    this.props.onAddCigarette(message, rated);
  };
  render () {
    return (
      <Input addCigaretteHandler={this.addCigaretteHandler} />
    )
  }
}


const mapStateToProps = state => {
  return {
    cigarettes: state.cigarettes.cigarettes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCigarette: (content, rated) => dispatch(addCigarette(content, rated))
  };
};

const HomescreenWithProps = connect(mapStateToProps, mapDispatchToProps)(Homescreen);
const InputcreenWithProps = connect(mapStateToProps, mapDispatchToProps)(InputCigarette);
const ChartWithProps = connect(mapStateToProps, mapDispatchToProps)(Chartscreen);

const TabNavigator = createMaterialBottomTabNavigator({
  home: { 
    screen: HomescreenWithProps,
    navigationOptions: {
      tabBarIcon: () => (<Ionicons name="ios-home" size={30}/>),
        tabBarLabel: 'Overview',
        tabBarColor: '#9B7A7B',
    }
  },
  InputCigarette: {
    screen: InputcreenWithProps,
    navigationOptions: {
      tabBarIcon: () => (<MaterialIcons name="smoking-rooms" size={30}/>),
        tabBarLabel: 'Smoke!',
        tabBarColor: '#F0A979',
    }
  },
  Chart: { 
    screen: ChartWithProps,
    navigationOptions: {
      tabBarIcon: () => (<AntDesign name="barchart" size={30}/>),
        tabBarLabel: 'Statistics',
        tabBarColor: '#F9F0AF',
    }
  }},
  {
    initialRouteName: 'home',
    shifting: true,
    activeColor: 'black',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});

const App = createAppContainer(TabNavigator);

export default App;
// export default createAppContainer(TabNavigator);
