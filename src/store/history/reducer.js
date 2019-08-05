import { ADD_HISTORY } from '../actionTypes';
import uuid from 'uuid-with-v6';

const historyReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_HISTORY:
      return [...state, { id: uuid.v6(), result: action.payload }];
    default:
      return state;
  }
}

export default historyReducer;