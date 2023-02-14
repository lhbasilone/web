import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vg8YaJhRkmmcbs98amStNgU9GTbWTcI",
  authDomain: "enraizar-34548.firebaseapp.com",
  projectId: "enraizar-34548",
  storageBucket: "enraizar-34548.appspot.com",
  messagingSenderId: "835269823939",
  appId: "1:835269823939:web:26a4e23ef3767412250176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
