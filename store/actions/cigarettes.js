import { ADD_CIGARETTE, SET_CIGARETTES } from './actionTypes';


export const addCigarette = (message, rated) => {
  return {
    type: ADD_CIGARETTE,
    message: message,
    rated: rated
  };
};

export const setCigarettes = () => {
  return {
    type: SET_CIGARETTES
  };
};