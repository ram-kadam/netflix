import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBQhgyAajqNxg7tNFeLa1Mb0rxkJmiw1Eg",
  authDomain: "clone-7d59d.firebaseapp.com",
  projectId: "clone-7d59d",
  storageBucket: "clone-7d59d.appspot.com",
  messagingSenderId: "1063577121187",
  appId: "1:1063577121187:web:3973d0108dba9f91882a16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.

export  { auth };
export default db;