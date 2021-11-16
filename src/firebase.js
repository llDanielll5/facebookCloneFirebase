import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFiGXRTvUH_zd635IKX0eL2KdtEmbODuY",
  authDomain: "facebook-clone-daniel.firebaseapp.com",
  projectId: "facebook-clone-daniel",
  storageBucket: "facebook-clone-daniel.appspot.com",
  messagingSenderId: "1092706228894",
  appId: "1:1092706228894:web:0762a17c466a6537ee798f",
  measurementId: "G-PVBQWD19DX"
});


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions, firebaseApp};
