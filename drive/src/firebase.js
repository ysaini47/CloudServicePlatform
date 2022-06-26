import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
//import 'firebase/compat/provider';

const firebaseConfig = {
  apiKey: "AIzaSyBslueGGCI_A8yyKefMYa9fL8DlKQLb0sM",
  authDomain: "drive-41fd1.firebaseapp.com",
  projectId: "drive-41fd1",
  storageBucket: "drive-41fd1.appspot.com",
  messagingSenderId: "691303526036",
  appId: "1:691303526036:web:e2c34b1d1289e3088a4e81",
  measurementId: "G-MEKTDSV9WY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }