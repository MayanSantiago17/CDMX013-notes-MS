// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TOD: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nkpNhxRYU1fICk24K6roY3ZeV1jX37w",
  authDomain: "notes-4b486.firebaseapp.com",
  projectId: "notes-4b486",
  storageBucket: "notes-4b486.appspot.com",
  messagingSenderId: "1074413066091",
  appId: "1:1074413066091:web:ffc4a718367695c15d5e2e",
  measurementId: "G-BCYMEQ4CZR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const analytics = getAnalytics(app);