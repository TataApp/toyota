/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEv3jBIZj_NjkBfbxYrZ9hOY4fFb7I0Ic",
  authDomain: "kamyon-323506.firebaseapp.com",
  projectId: "kamyon-323506",
  storageBucket: "kamyon-323506.appspot.com",
  messagingSenderId: "507587408310",
  appId: "1:507587408310:web:4dcac07a9f6600b0495117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/

import firebase from 'firebase/app';

import '@firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyByN7x5AUFKLHteh87zrwV0a0hLYBSGnY0",
  authDomain: "kamyon-bbfad.firebaseapp.com",
  projectId: "kamyon-bbfad",
  storageBucket: "kamyon-bbfad.appspot.com",
  messagingSenderId: "466074652820",
  appId: "1:466074652820:web:79e50b20b12cc3c5abe481",
  measurementId: "G-VJG9VHKE05"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBEv3jBIZj_NjkBfbxYrZ9hOY4fFb7I0Ic",
//   authDomain: "kamyon-323506.firebaseapp.com",
//   projectId: "kamyon-323506",
//   storageBucket: "kamyon-323506.appspot.com",
//   messagingSenderId: "507587408310",
//   appId: "1:507587408310:web:4dcac07a9f6600b0495117"
// };
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {}
export default firebase


// import * as firebase from "firebase";
// import "@firebase/auth";
// const firebaseConfig = {
//   apiKey: "...",
//   authDomain: "...",
//   databaseURL: "...",
//   projectId: "...",
//   storageBucket: "...",
//   messagingSenderId: "...",
//   appId: "...",
// };
