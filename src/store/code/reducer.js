import { SET_CODE } from '../actionTypes';

const defaultState = "// para ler a entrada user read() e para escrever use write('string')";

const codeReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_CODE:
      return action.payload;
    default:
      return state;
  }
}

export default codeReducer;