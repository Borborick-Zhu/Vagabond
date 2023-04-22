import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAVhhmwuFrXNufgvDnOJtlXN43JDrX8QBs",
  authDomain: "lahacks-16c7c.firebaseapp.com",
  projectId: "lahacks-16c7c",
  storageBucket: "lahacks-16c7c.appspot.com",
  messagingSenderId: "507818661720",
  appId: "1:507818661720:web:62f77ee2333c471137772d",
  measurementId: "G-PVVF9LXPMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app)