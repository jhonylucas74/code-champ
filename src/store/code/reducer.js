import { SET_CODE } from '../actionTypes';

const defaultState = "for (let i = 1; i <= 100; i++) {write(i) }";

const codeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_CODE:
      return action.payload;
    default:
      return state;
  }
}

export default codeReducer;