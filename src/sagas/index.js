import { fork } from 'redux-saga/effects';

import { sagas as auth } from '../auth';

const sagas = [
  auth,
];

export default function* rootSaga() {
  yield sagas.map(fork);
}
