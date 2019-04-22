import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { registerRootComponent } from 'expo';

const store = configureStore();

/*
[Separation of concerns]

All these logic about loading the data from the AsyncStorage and setting a listener
that updates it should be moved into the configureStore.

What's the goal of the index.js file? - To bootstrap the application
Managing the store persistance isn't its responsability, but the redux store's.
*/

const fetchAllItems = async () => {
  try {
    let x = await AsyncStorage.getItem('@cigaretteStorage:key');
    if (x) {
      const data = JSON.parse(x);
      // const sortedArray = data.cigarettes.cigarettes.sort((a,b) => {
      //   if (a.time < b.time) return -1;
      //   if (a.time > b.time) return 1;
      //   return 0;
      // })

      // Simplified version below
      const sortedArray = data.cigarrettes.cigarrettes.sort(
        (a, b) => a.time - b.time
      );

      store.dispatch({
        type: 'SET_CIGARETTES',
        array: sortedArray
      });
    }
    store.subscribe(storeState);
  } catch (e) {
    console.log('Error: ', e);
  }
};
const storeState = async () => {
  AsyncStorage.setItem(
    '@cigaretteStorage:key',
    JSON.stringify(store.getState())
  );
};

// AsyncStorage.clear();
fetchAllItems();

// Name the component as something meaningful for the app, not as
// a technology you use in it.
class RRedux extends Component {
  render() {
    fetchAllItems();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default registerRootComponent(RRedux);
