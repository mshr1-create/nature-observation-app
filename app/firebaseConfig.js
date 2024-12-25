// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1kX77CT6Z7DnpZJb_3bxwu2wUr4e4R9E",
  authDomain: "nature-observation-app.firebaseapp.com",
  projectId: "nature-observation-app",
  storageBucket: "nature-observation-app.firebasestorage.app",
  messagingSenderId: "803440416079",
  appId: "1:803440416079:web:a9d1b3050c941509c1613a",
  measurementId: "G-26FYB818QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);