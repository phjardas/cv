import { call, fork, put, take } from 'redux-saga/effects';

import { firebase } from '../firebase';

const db = firebase.database();
const contentRef = db.ref('content');

function* loadContent() {
  while (true) {
    yield take('content.load');
    const content = yield call(contentRef.once.bind(contentRef), 'value');
    yield put({ type: 'content.update', payload: content.val() });
  }
}

export function* sagas() {
  yield [ loadContent ].map(fork);
}
