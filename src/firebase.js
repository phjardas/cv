import Firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC_Z1wRbkaxStXpAn4ZbNGaoxc3WmQa7ZA',
  authDomain: 'cv-jardas.firebaseapp.com',
  databaseURL: 'https://cv-jardas.firebaseio.com',
  projectId: 'cv-jardas',
  storageBucket: 'cv-jardas.appspot.com',
  messagingSenderId: '337001694882',
  appId: '1:337001694882:web:d6a5e5e2dffa3f2d52f9fb',
};

export { Firebase };
export const firebase = Firebase.initializeApp(config);
export const firestore = firebase.firestore();
