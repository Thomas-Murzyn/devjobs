import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbwqH4zOT3dgPgUH8qoZ22mkERu8hppz0",
  authDomain: "devjobs-fcab9.firebaseapp.com",
  projectId: "devjobs-fcab9",
  storageBucket: "devjobs-fcab9.appspot.com",
  messagingSenderId: "710773138712",
  appId: "1:710773138712:web:54698952b69448497baa6d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
