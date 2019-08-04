import { combineReducers } from 'redux';
import inputs from './inputs/reducer';
import code from './code/reducer';
import output from './output/reducer';

const reducers = combineReducers({
  inputs,
  output,
  code
});

export default reducers;
