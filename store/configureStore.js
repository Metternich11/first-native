import { createStore, combineReducers } from 'redux';
import cigarettesReducer from './reducers/root';

/*

Why combining reducers if you have only a single reducer?
That results on having a double nested "cigarettes" property,
which will drive you into bugs, mistakes and less maintainable
code.

*/

const rootReducer = combineReducers({
  cigarettes: cigarettesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
