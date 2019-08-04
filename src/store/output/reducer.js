import { ADD_OUTPUT, CLEAN_OUTPUT } from '../actionTypes';
import uuid from 'uuid-with-v6';

const inputReducer = (state = [], action) => {
  switch(action.type) {
    case CLEAN_OUTPUT:
      return [];
    case ADD_OUTPUT:
      return [...state, {
        id: uuid.v6(),
        message: action.payload.log,
        error: action.payload.error,
        finish: action.payload.finish
      }];
    default:
      return state;
  }
}

export default inputReducer;