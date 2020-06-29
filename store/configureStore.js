import { createStore, combineReducers } from 'redux';
import { cigarettesReducer, colorsReducer }from './reducers/root'; 

const rootReducer = combineReducers({
  cigarettes: cigarettesReducer,
  colors: colorsReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;