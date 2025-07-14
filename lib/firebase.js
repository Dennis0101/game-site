// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyDzgf228ZJNqscnlyJlMhuX1ThExVJf-NM",
  authDomain: "game-site-5ba80.firebaseapp.com",
  projectId: "game-site-5ba80",
  storageBucket: "game-site-5ba80.firebasestorage.app",
  messagingSenderId: "909986794234",
  appId: "1:909986794234:web:4000734fbd0747a9031743",
  measurementId: "G-36LJ9MR3M6"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
