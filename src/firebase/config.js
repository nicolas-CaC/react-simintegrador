// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXMkidE4UIxTiowC4eYKAy9H-Vt44BTSw",
    authDomain: "react-firebase-376a4.firebaseapp.com",
    projectId: "react-firebase-376a4",
    storageBucket: "react-firebase-376a4.appspot.com",
    messagingSenderId: "260452920093",
    appId: "1:260452920093:web:660dd1f6f2dc3451afcff4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
