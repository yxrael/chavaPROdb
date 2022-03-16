

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import  initializeApp  from "firebase/app";
// import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqvi-nOjXIENfyto3VaZxwug-Rj7sc5js",
  authDomain: "chavapro-9a967.firebaseapp.com",
  projectId: "chavapro-9a967",
  databaseURL: 'gs://chavapro-9a967.appspot.com',
  storageBucket: "chavapro-9a967.appspot.com",
  messagingSenderId: "705461988689",
  appId: "1:705461988689:web:2ad708cf6ec30c47367770",
  measurementId: "G-BV05K7C3S0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {
    db,
    googleAuthProvider,
    firebase,
    storage
}