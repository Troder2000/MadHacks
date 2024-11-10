import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
