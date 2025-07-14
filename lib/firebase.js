// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgf228ZJNqscnlyJlMhuX1ThExVJf-NM",
  authDomain: "game-site-5ba80.firebaseapp.com",
  projectId: "game-site-5ba80",
  storageBucket: "game-site-5ba80.firebasestorage.app",
  messagingSenderId: "909986794234",
  appId: "1:909986794234:web:4000734fbd0747a9031743",
  measurementId: "G-36LJ9MR3M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
