// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fa204.firebaseapp.com",
  projectId: "mern-estate-fa204",
  storageBucket: "mern-estate-fa204.appspot.com",
  messagingSenderId: "307636850425",
  appId: "1:307636850425:web:7ff64b38d52353c2709c28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);