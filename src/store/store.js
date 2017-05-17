import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

import reducer from './reducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  predicate: (getState, { type }) => !type.startsWith('@@'),
});

const middewares = [
  reduxImmutableStateInvariant(),
  sagaMiddleware,
  routerMiddleware(browserHistory),
  logger,
];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middewares),
     // add support for Redux dev tools
     window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;
