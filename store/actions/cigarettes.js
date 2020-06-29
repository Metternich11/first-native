import { ADD_CIGARETTE, SET_CIGARETTES, SET_COLORS } from './actionTypes';


export const addCigarette = (title, description, rated) => {
  return {
    type: ADD_CIGARETTE,
    title: title,
    description: description,
    rated: rated
  };
};

export const setCigarettes = () => {
  return {
    type: SET_CIGARETTES
  };
};
