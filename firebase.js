// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.appID,
    authDomain: "playfulpal.firebaseapp.com",
    projectId: "playfulpal",
    storageBucket: "playfulpal.appspot.com",
    messagingSenderId: "1025677292047",
    appId: "1:1025677292047:web:90d84ac4a40e7c73f6297a",
    measurementId: "G-Y8G2GL7P11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db }