// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyC6-55a9UIpcNCQbVpH1phHqWXPPK-3WSI',
  authDomain: 'linkedin-clone-ee36e.firebaseapp.com',
  projectId: 'linkedin-clone-ee36e',
  storageBucket: 'linkedin-clone-ee36e.appspot.com',
  messagingSenderId: '54181006247',
  appId: '1:54181006247:web:2fbb910cfb4fed0fa00482',
  measurementId: 'G-5WR3DFTC57',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
auth.useEmulator('http://localhost:3000');
export { db, auth };
