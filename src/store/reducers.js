import { combineReducers } from 'redux';
import inputs from './inputs/reducer';
import code from './code/reducer';

const reducers = combineReducers({
  inputs,
  code
});

export default reducers;
