import { call, fork, put, take } from 'redux-saga/effects';

import { firebase } from '../firebase';

const db = firebase.database();
const contentRef = db.ref('content');
const menuRef = db.ref('menu');

function* loadContent() {
  while (true) {
    yield take('content.load');
    const content = yield call(contentRef.once.bind(contentRef), 'value');
    const menu = yield call(menuRef.once.bind(menuRef), 'value');
    yield put({ type: 'content.update', payload: { content: content.val(), menu: menu.val() }});
  }
}

export function* sagas() {
  yield [ loadContent ].map(fork);
}
