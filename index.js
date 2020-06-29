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
      const data = await JSON.parse(x);
      const sortedArray = await data.cigarettes.cigarettes.sort((a,b) => {
        return b.time - a.time;
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
// fetchAllItems();

class RRedux extends Component {
  render() {
    fetchAllItems();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return (
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    );
  };
};

export default registerRootComponent(RRedux);