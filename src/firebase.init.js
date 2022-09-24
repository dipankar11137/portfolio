// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqfTWz7AEyZ81CKHQvCnC5c4zol0Coj-c",
  authDomain: "portfolio-a23e4.firebaseapp.com",
  projectId: "portfolio-a23e4",
  storageBucket: "portfolio-a23e4.appspot.com",
  messagingSenderId: "668386701047",
  appId: "1:668386701047:web:0879a022afb1ccfabdedf2",
  measurementId: "G-014V62B3K5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
