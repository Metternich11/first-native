import React, { Component } from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import { addCigarette } from './store/actions/index';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/Ionicons';

import Overview from './screens/Overview';
import Input from './screens/Input';
import Chart from './screens/Chart';

// import { LongPressGestureHandler } from 'react-native-gesture-handler';
/*

It's weird to connect all containers here to redux. Instead, do it inside every component file.
If you want to reuse the selector `mapStateToProps` and the dispatcher `mapDispatchToProps` you
can put that into a selectors file and import it from wherever you want.

Also the way you're doing it, creating a component that only renders the screen with the props
passed in a data prop. Why not using the `Chart` Component instead of doing a `ChartScreen` on
top?

This file should only import the containers and compose the TabNavigation with them.

*/

const Chartscreen = props => {
  return <Chart data={props} />;
};
const Homescreen = props => {
  return <Overview data={props} />;
};
class InputCigarette extends Component {
  addCigaretteHandler = (message, rated) => {
    this.props.onAddCigarette(message, rated);
  };
  render() {
    return <Input addCigaretteHandler={this.addCigaretteHandler} />;
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

const HomescreenWithProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Homescreen);
const InputcreenWithProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputCigarette);
const ChartWithProps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chartscreen);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    home: {
      screen: HomescreenWithProps,
      navigationOptions: {
        tabBarIcon: () => <Ionicons name="ios-home" size={30} />,
        tabBarLabel: 'Overview',
        tabBarColor: '#9068be'
      }
    },
    InputCigarette: {
      screen: InputcreenWithProps,
      navigationOptions: {
        tabBarIcon: () => <MaterialIcons name="smoking-rooms" size={30} />,
        tabBarLabel: 'Smoke!',
        tabBarColor: '#e1e8f0'
      }
    },
    Chart: {
      screen: ChartWithProps,
      navigationOptions: {
        tabBarIcon: () => <AntDesign name="barchart" size={30} />,
        tabBarLabel: 'Statistics',
        tabBarColor: '#6ed3cf'
      }
    }
  },
  {
    initialRouteName: 'home',
    shifting: true,
    activeColor: 'black',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#6ed3cf' }
  }
);

const App = createAppContainer(TabNavigator);

export default App;
// export default createAppContainer(TabNavigator);
