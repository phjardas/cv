import { fork } from 'redux-saga/effects';

import { sagas as auth } from '../auth';
import { sagas as content } from '../content';

const sagas = [
  auth,
  content,
];

export default function* rootSaga() {
  yield sagas.map(fork);
}
