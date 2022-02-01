import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB66IJHm932OMjmR6izpUWtI-ysmujkR2k",
  authDomain: "freshkeeper-development.firebaseapp.com",
  projectId: "freshkeeper-development",
  storageBucket: "freshkeeper-development.appspot.com",
  messagingSenderId: "932358224129",
  appId: "1:932358224129:web:40b88cb948a1def436c300",
  measurementId: "G-1VW0YHGM3G",
});

export const auth = app.auth();
export const firestore = app.firestore();
export const functions = app.functions();

export default firebase;
