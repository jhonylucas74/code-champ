import { ADD_INPUT, UPDATE_INPUT, CLEAN_INPUTS, REMOVE_INPUT } from '../actionTypes';
import uuid from 'uuid-with-v6';

const inputReducer = (state = [], action) => {
  switch(action.type) {
    case CLEAN_INPUTS:
      return [];
    case ADD_INPUT:
      return [...state, { id: uuid.v6(), value: '' }];
    case UPDATE_INPUT:
      const inputs = [...state];
      const input = inputs.filter(elm => elm.id === action.payload.id)[0];
      input.value = action.payload.value;
      return inputs;
    case REMOVE_INPUT:
      let data = [...state];
      data = data.filter(elm => elm.id != action.payload.id);
      return data;
    default:
      return state;
  }
}

export default inputReducer;