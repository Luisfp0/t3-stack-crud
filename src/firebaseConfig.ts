// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7z12_jI_bCLZ5-90ljsky8Kiy8dRcLmo",
  authDomain: "crud-app-920c2.firebaseapp.com",
  projectId: "crud-app-920c2",
  storageBucket: "crud-app-920c2.appspot.com",
  messagingSenderId: "679183615757",
  appId: "1:679183615757:web:e6d71f0c00db95f6dc1244",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)
export {app, auth, firestore, storage}
