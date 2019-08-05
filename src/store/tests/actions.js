import { SET_TESTS, CLEAN_TESTS, UPDATE_TEST } from '../actionTypes';

export const setTests = (payload) => ({
  type: SET_TESTS,
  payload: payload
});

export const cleanTests = () => ({
  type: CLEAN_TESTS
});

export const updateTest = (payload) => ({
  type: UPDATE_TEST,
  payload: payload
});