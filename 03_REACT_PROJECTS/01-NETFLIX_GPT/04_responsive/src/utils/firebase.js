// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-8fe3b.firebaseapp.com",
  projectId: "netflixgpt-8fe3b",
  storageBucket: "netflixgpt-8fe3b.firebasestorage.app",
  messagingSenderId: "916214243131",
  appId: "1:916214243131:web:7f9c14510ad8760cd3611e",
  measurementId: "G-3VH9EX3N5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
