// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-h3el8f3IEujAY5KfK2oc4IUJjeflu-k",
  authDomain: "byteburst-productions.firebaseapp.com",
  projectId: "byteburst-productions",
  storageBucket: "byteburst-productions.appspot.com",
  messagingSenderId: "355032120899",
  appId: "1:355032120899:web:0badb44a54d40d0c0b9ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
export default auth;