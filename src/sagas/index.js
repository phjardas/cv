import { fork } from 'redux-saga/effects';

import { sagas as auth } from '../auth';
import { sagas as content } from '../content';
import { sagas as i18n } from '../i18n';

const sagas = [
  auth,
  content,
  i18n,
];

export default function* rootSaga() {
  yield sagas.map(fork);
}
