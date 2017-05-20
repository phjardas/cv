import { call, fork, put, take } from 'redux-saga/effects';

import { firebase } from '../firebase';
import createChannel from '../sagas/channel';

const auth = firebase.auth();

const providers = {
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  },
  github: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  },
  twitter: () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithPopup(provider);
  },
};

function* createAuthChanges() {
  const channel = createChannel();
  auth.onAuthStateChanged(user => channel.put(user && {
    id: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    provider: user.providerData[0].providerId,
  }));

  while (true) {
    const user = yield call(channel.take);
    yield put({ type: 'auth.update', payload: { user }});
    if (user) {
      yield put({ type: 'content.load' });
    }
  }
}

function *login() {
  while (true) {
    const login = yield take('auth.login');
    providers[login.payload.provider]();
  }
}

function *logout() {
  while (true) {
    yield take('auth.logout');
    auth.signOut();
  }
}

export function* sagas() {
  yield [ createAuthChanges, login, logout ].map(fork);
}
