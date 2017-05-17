import { call, fork, put, take } from 'redux-saga/effects';

import { firebase } from '../firebase';

const db = firebase.database();
const contentRef = db.ref('content');

function* loadContent() {
  while (true) {
    yield take('content.load');
    const snapshot = yield call(contentRef.once.bind(contentRef), 'value');
    yield put({ type: 'content.update', payload: snapshot.val() });
  }
}

export function* sagas() {
  yield [ loadContent ].map(fork);
}
