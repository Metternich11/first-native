import {  COLORS } from './actionTypes';

export const setColor = (color1, color2, color3, color4, color5) => {
  return {
    type: ADD_CIGARETTE,
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5
  };
};