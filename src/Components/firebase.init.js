// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbb6IX6OI01A4UjUTn1s-kYh8LiWyF5oM",
  authDomain: "smart-book-warehouse.firebaseapp.com",
  projectId: "smart-book-warehouse",
  storageBucket: "smart-book-warehouse.appspot.com",
  messagingSenderId: "332070624576",
  appId: "1:332070624576:web:6851c13c7fb7877269aea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth; 