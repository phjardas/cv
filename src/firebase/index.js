import * as firebase from 'firebase';
export * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBeV339rYM3PANdFIpISZMNBZaBuR_qASY',
  authDomain: 'jardas-cv.firebaseapp.com',
  databaseURL: 'https://jardas-cv.firebaseio.com',
  projectId: 'jardas-cv',
  storageBucket: 'jardas-cv.appspot.com',
  messagingSenderId: '766091382543'
};

firebase.initializeApp(firebaseConfig);
