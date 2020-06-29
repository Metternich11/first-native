import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import { addCigarette, setColors } from './store/actions/index';
import { connect } from 'react-redux';

import Overview from './screens/Overview';
import Input from './screens/Input';
import Chart from './screens/Chart';
import Timeline from './screens/Timeline';

const Chartscreen = (props) => {
  return ( <Chart data={props}/>)
}

class Homescreen extends Component {
  addColorHandler = (c1, c2, c3, c4, c5) => {
    this.props.onSetColors(c1, c2, c3, c4, c5);
  };
  render () {
    return (
      <Overview addColorHandler={this.addColorHandler} data={this.props}/>
    )
  }
}

class InputCigarette extends Component {
  addCigaretteHandler = (title, description, rated) => {
    this.props.onAddCigarette(title, description, rated);
  };
  render () {
    return (
      <Input addCigaretteHandler={this.addCigaretteHandler} data={this.props}/>
    )
  }
}

const TimelineScreen = (props) => {
  return (<Timeline data={props}/>)
}

const mapStateToProps = state => {
  return {
    cigarettes: state.cigarettes.cigarettes,
    colors: state.colors.colors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCigarette: (title, description, rated) => dispatch(addCigarette(title, description, rated)),
    onSetColors: (c1, c2, c3, c4, c5) => dispatch(setColors(c1, c2, c3, c4, c5))
  };
};

const HomescreenWithProps = connect(mapStateToProps, mapDispatchToProps)(Homescreen);
const InputcreenWithProps = connect(mapStateToProps, mapDispatchToProps)(InputCigarette);
const ChartWithProps = connect(mapStateToProps, mapDispatchToProps)(Chartscreen);
const TimelineWithProps = connect(mapStateToProps, mapDispatchToProps)(TimelineScreen);




class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {reload: true};
  }
  render() {
    this.props.store.subscribe(()=>{this.setState({reload:false})});
    let colors = this.props.store.getState().colors.colors;
    const TabNavigator = createMaterialBottomTabNavigator({
      home: { 
        screen: HomescreenWithProps,
        navigationOptions: {
          tabBarIcon: () => (<Ionicons name="ios-home" size={30}/>),
          tabBarLabel: 'Overview',
          tabBarColor: colors.color1,
        }
      },
      InputCigarette: {
        screen: InputcreenWithProps,
        navigationOptions: {
          tabBarIcon: () => (<MaterialIcons name="smoking-rooms" size={30}/>),
          tabBarLabel: 'Smoke!',
          tabBarColor: colors.color2,
        }
      },
      Chart: { 
        screen: ChartWithProps,
        navigationOptions: {
          tabBarIcon: () => (<AntDesign name="barchart" size={30}/>),
          tabBarLabel: 'Statistics',
          tabBarColor: colors.color3,
        }
      },
      Timeline: { 
        screen: TimelineWithProps,
        navigationOptions: {
          tabBarIcon: () => (<Ionicons name="md-time" size={30}/>),
          tabBarLabel: 'Timeline',
          tabBarColor: colors.color4
        }
      }
    },
      {
        initialRouteName: 'home',
        shifting: true,
        activeColor: 'black',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#6ed3cf' },
    });
    const App = createAppContainer(TabNavigator);
    return (
      <App />
    )
  }
}
export default App2;
// export default createAppContainer(TabNavigator);
