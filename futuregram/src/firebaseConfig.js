// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Ensure this is imported

const firebaseConfig = {
    apiKey: "AIzaSyCaVr0lIJdze2FArRqdb2kvFlo5CDmmfOA",
    authDomain: "madhacks-futuregram.firebaseapp.com",
    projectId: "madhacks-futuregram",
    storageBucket: "madhacks-futuregram.firebasestorage.app",
    messagingSenderId: "537777537131",
    appId: "1:537777537131:web:4d97ceb29cf3395a6b312e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
