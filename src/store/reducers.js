import { combineReducers } from 'redux';
import inputs from './inputs/reducer';
import code from './code/reducer';
import output from './output/reducer';
import exercise from './exercise/reducer';
import tests from './tests/reducer';
import history from './history/reducer';

const reducers = combineReducers({
  exercise,
  inputs,
  history,
  output,
  tests,
  code
});

export default reducers;
