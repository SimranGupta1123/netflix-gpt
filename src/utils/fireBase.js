// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsE0oIa54zyYuJjl7leN5AfbEbWkAeJJI",
  authDomain: "netflixgpt-8fec1.firebaseapp.com",
  projectId: "netflixgpt-8fec1",
  storageBucket: "netflixgpt-8fec1.appspot.com",
  messagingSenderId: "701082305413",
  appId: "1:701082305413:web:07c44ad3cde2a8a9cc7aec",
  measurementId: "G-1R6WRPBYVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
