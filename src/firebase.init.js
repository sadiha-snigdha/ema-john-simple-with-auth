// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJG9CwPKMPxiaJNwd2O3y3kc9Tr5hInS4",
  authDomain: "ema-john-simple-d200e.firebaseapp.com",
  projectId: "ema-john-simple-d200e",
  storageBucket: "ema-john-simple-d200e.appspot.com",
  messagingSenderId: "406070866696",
  appId: "1:406070866696:web:f861f43ebde0d1f3f772bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
