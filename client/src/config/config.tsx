// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "project-523ae.firebaseapp.com",
  projectId: "project-523ae",
  storageBucket: "project-523ae.appspot.com",
  messagingSenderId: "430968506386",
  appId: "1:430968506386:web:cad24c070f8f7e98f070cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);