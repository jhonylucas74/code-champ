import { ADD_OUTPUT, CLEAN_OUTPUT } from '../actionTypes';

export const addOutput = (payload) => ({
  type: ADD_OUTPUT,
  payload: payload
});

export const cleanOutputs = () => ({
  type: CLEAN_OUTPUT
});
