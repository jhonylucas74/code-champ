import { SET_CODE } from '../actionTypes';

const defaultState = "// seu código aqui";

const codeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_CODE:
      return action.payload;
    default:
      return state;
  }
}

export default codeReducer;