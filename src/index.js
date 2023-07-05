import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3IBGvnECxuDA-gFQAOkcJBaBnlaF67gI",
  authDomain: "final-react-d3285.firebaseapp.com",
  projectId: "final-react-d3285",
  storageBucket: "final-react-d3285.appspot.com",
  messagingSenderId: "270367622933",
  appId: "1:270367622933:web:5b4f2ef4843b6a46ca4b1c"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


