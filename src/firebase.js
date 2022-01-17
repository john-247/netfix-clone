import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5nQCdNQS8_1mF6ZDQrEmwrIZas07cyeY",
  authDomain: "netflix-1b362.firebaseapp.com",
  projectId: "netflix-1b362",
  storageBucket: "netflix-1b362.appspot.com",
  messagingSenderId: "515922036578",
  appId: "1:515922036578:web:3ad8b76848ca66489d8e3b",
  measurementId: "G-YKYPJCJP0J",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
