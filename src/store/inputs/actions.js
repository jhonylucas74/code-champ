import { ADD_INPUT, SET_INPUTS, UPDATE_INPUT, CLEAN_INPUTS, REMOVE_INPUT } from '../actionTypes';

export const addInput = (payload) => ({
  type: ADD_INPUT,
  payload: payload
});

export const setInputs = (payload) => ({
  type: SET_INPUTS,
  payload: payload
})

export const updateInput = (payload) => ({
  type: UPDATE_INPUT,
  payload: payload
});

export const cleanInputs = () => ({
  type: CLEAN_INPUTS
});

export const removeInput = (id) => ({
  type: REMOVE_INPUT,
  payload: { id }
})