// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5wBPJxvjw3nLR5v-3VJSIR8QH75M7TSY",
  authDomain: "clone-yt-e656d.firebaseapp.com",
  projectId: "clone-yt-e656d",
  storageBucket: "clone-yt-e656d.firebasestorage.app",
  messagingSenderId: "1031222610227",
  appId: "1:1031222610227:web:3b5283c17a48f2a8f75646",
  measurementId: "G-QDR71Y0RM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
