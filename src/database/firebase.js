// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv2C_yBmJfDF8LJf2XZeWwZhFq0rpTX8w",
  authDomain: "user-authentication-c6a05.firebaseapp.com",
  projectId: "user-authentication-c6a05",
  storageBucket: "user-authentication-c6a05.appspot.com",
  messagingSenderId: "248971517406",
  appId: "1:248971517406:web:3f0d238b73f94c12d7914f",
  measurementId: "G-957S6CGZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
