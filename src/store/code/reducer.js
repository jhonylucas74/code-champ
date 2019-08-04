import { SET_CODE } from '../actionTypes';

const codeReducer = (state = '', action) => {
  switch(action.type) {
    case SET_CODE:
      return action.payload;
    default:
      return state;
  }
}

export default codeReducer;