import { createStore, combineReducers } from 'redux';
import cigarettesReducer from './reducers/root'; 

const rootReducer = combineReducers({
  cigarettes: cigarettesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;