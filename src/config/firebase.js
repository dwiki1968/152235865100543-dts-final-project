// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaw_ANzJ3i2WOQnYfq8Aghxo16DWvQxdc",
  authDomain: "dts-final-project.firebaseapp.com",
  projectId: "dts-final-project",
  storageBucket: "dts-final-project.appspot.com",
  messagingSenderId: "1005284998758",
  appId: "1:1005284998758:web:420b194038a4202fb0f7a7",
  measurementId: "G-NP2GTKD5WQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
