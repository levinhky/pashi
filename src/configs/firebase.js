import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGVrYS32IMMRUExmRUekNaSAIUUrd3csY",
  authDomain: "react-assigment-2b076.firebaseapp.com",
  projectId: "react-assigment-2b076",
  storageBucket: "react-assigment-2b076.appspot.com",
  messagingSenderId: "111519838004",
  appId: "1:111519838004:web:d5bc1a8e2d16ba4153bf61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);