import { call, fork, put, take } from 'redux-saga/effects';

function* setLanguage() {
  while (true) {
    const { payload: { language }} = yield take('i18n.setLanguage');
    localStorage.setItem('language', language);
  }
}

export function* sagas() {
  yield [ setLanguage ].map(fork);
}
