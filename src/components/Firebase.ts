import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAQLB2pf1vHK-Zi891YKonYkpHP6gWwyg8',
  authDomain: 'hamchance-26272.firebaseapp.com',
  databaseURL: 'https://hamchance-26272.firebaseio.com',
  projectId: 'hamchance-26272',
  storageBucket: 'hamchance-26272.appspot.com',
  messagingSenderId: '161921965081',
  appId: '1:161921965081:web:d6446b0f73af176e159e88',
  measurementId: 'G-2555YJ3MQ7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
