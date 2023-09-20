// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxLmuQnvRV-pFIuWCvT2_E_lZs5G7AoqA",
  authDomain: "expense-tracker-db308.firebaseapp.com",
  projectId: "expense-tracker-db308",
  storageBucket: "expense-tracker-db308.appspot.com",
  messagingSenderId: "162492601511",
  appId: "1:162492601511:web:a2a5b3d06d2cadfa593782",
  measurementId: "G-H4MV0MHK9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);