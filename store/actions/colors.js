import {  SET_COLORS } from './actionTypes';

export const setColors = (color1, color2, color3, color4, color5) => {
  return {
    type: SET_COLORS,
    color1: color1,
    color2: color2,
    color3: color3,
    color4: color4,
    color5: color5
  };
};