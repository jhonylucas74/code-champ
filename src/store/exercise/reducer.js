import { SET_EXERCISE } from '../actionTypes';

const exerciseReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EXERCISE:
      return action.payload;
    default:
      return state;
  }
}

export default exerciseReducer;
