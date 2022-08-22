import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5kHs7D3PC7I6mc3gngLmkFkRdZWH-xQI",
  authDomain: "facebook-messenger-clone-e87c4.firebaseapp.com",
  projectId: "facebook-messenger-clone-e87c4",
  storageBucket: "facebook-messenger-clone-e87c4.appspot.com",
  messagingSenderId: "16713199444",
  appId: "1:16713199444:web:4e4720a0ae37b173ad22c1",
  measurementId: "G-1R35DSN8FG"
});

const db = firebaseApp.firestore();
export default db;