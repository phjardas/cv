import { call, fork, put, take } from 'redux-saga/effects';
import ga from 'react-ga';

import { firebase } from '../firebase';
import createChannel from '../sagas/channel';

const auth = firebase.auth();

const providers = {
  google: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  },
  github: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return auth.signInWithPopup(provider);
  },
  twitter: () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return auth.signInWithPopup(provider);
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
    yield call(ga.event.bind(ga), {
      category: 'User',
      action: 'Signin attempt',
    });

    try {
      const result = yield call(providers[login.payload.provider]);
      yield call(ga.event.bind(ga), {
        category: 'User',
        action: 'Signin success',
        label: result.credential.providerId,
      });
    } catch (err) {
      console.log('sign in error:', err);
      yield call(ga.event.bind(ga), {
        category: 'User',
        action: 'Signin failed',
        label: err.message || err.toString(),
      });
    }
  }
}

function *logout() {
  while (true) {
    yield take('auth.logout');
    yield call(ga.event.bind(ga), {
      category: 'User',
      action: 'Signout',
    });
    yield call(auth.signOut.bind(auth));
  }
}

export function* sagas() {
  yield [ createAuthChanges, login, logout ].map(fork);
}
