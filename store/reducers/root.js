import genRandomDate from '../../Ini';

import { ADD_CIGARETTE, SET_CIGARETTES } from '../actions/actionTypes';


const initialState = {
  cigarettes: genRandomDate()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CIGARETTE:
      const obj = {
        time: new Date().toISOString(),
        latitude: 41.3825,
        longitude: 2.17694,
        message: action.message,
        rating: action.rated
      };
      return {
        ...state,
        cigarettes: state.cigarettes.concat(obj)
      };

    case SET_CIGARETTES:
      return {
        ...state,
        cigarettes: action.array
      }

    default:
      return state;
  }
};

export default reducer;