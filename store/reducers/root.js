import genRandomDate from '../../Ini';

import { ADD_CIGARETTE, SET_CIGARETTES, SET_COLORS } from '../actions/actionTypes';
const initialColor = {
  color1: '#192E5B',
  color2: '#1D65A6',
  color3: '#72A2C0',
  color4: '#00743F',
  color5: '#F2A104'
}

export const colorsReducer = (state = initialColor, action) => {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        colors: {
          color1: action.color1,
          color2: action.color2,
          color3: action.color3,
          color4: action.color4,
          color5: action.color5
        }
      }
    default:
      return state;
  }
}

const initialState = {
  cigarettes: genRandomDate()
};

export const cigarettesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CIGARETTE:
      const obj = {
        time: new Date().toISOString(),
        latitude: 41.3825,
        longitude: 2.17694,
        title: action.title,
        description: action.description,
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
