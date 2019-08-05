import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import persistState from 'redux-localstorage';

import reducers from './reducers';

const middlewares = compose(
  applyMiddleware(logger),
  persistState('history')
);


const store = createStore(
  reducers,
  middlewares
);

export default store;