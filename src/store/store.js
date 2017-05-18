import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  reduxImmutableStateInvariant(),
  sagaMiddleware,
  createLogger({
    predicate: (getState, { type }) => !type.startsWith('@@'),
  }),
];

const initialState = {
  i18n: {
    language: 'en'
  }
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;
