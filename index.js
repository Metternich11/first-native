import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { registerRootComponent } from 'expo';


const store = configureStore();
const fetchAllItems = async () => {
  try {
    let x = await AsyncStorage.getItem('@cigaretteStorage:key');
    if (x) {
      const data = JSON.parse(x);
      const sortedArray = data.cigarettes.cigarettes.sort((a,b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
      })
      store.dispatch({
        type: 'SET_CIGARETTES',
        array: sortedArray
      });
    }
    store.subscribe(storeState);
  }
  catch(e) {
    console.log('Error: ', e);
  }
}
const storeState = async () => {
  AsyncStorage.setItem('@cigaretteStorage:key', JSON.stringify(store.getState()));
}

// AsyncStorage.clear();
fetchAllItems();

class RRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
};

export default registerRootComponent(RRedux);