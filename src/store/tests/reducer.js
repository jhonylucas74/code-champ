import { SET_TESTS, CLEAN_TESTS, UPDATE_TEST } from '../actionTypes';

const testsReducer = (state = [], action) => {
  switch(action.type) {
    case CLEAN_TESTS:
      return [];
    case SET_TESTS:
      return action.payload;
    case UPDATE_TEST:
      const tests = [...state];
      const test = tests.filter(elm => elm.id === action.payload.id)[0];
      test.status = action.payload.status;
      return tests;
    default:
      return state;
  }
}

export default testsReducer;