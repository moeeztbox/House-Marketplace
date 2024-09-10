import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0GhS8SErBgyz0BLuc5yVTARC-ViBGDv4",
  authDomain: "house-marketplace-app-97354.firebaseapp.com",
  projectId: "house-marketplace-app-97354",
  storageBucket: "house-marketplace-app-97354.appspot.com",
  messagingSenderId: "627720516622",
  appId: "1:627720516622:web:d17665ba393e9b8974385f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
