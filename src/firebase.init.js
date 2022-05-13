
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWo9Utv29Oqzawto178b1SVL-Ad65oqHE",
  authDomain: "bike-warehouse-74c98.firebaseapp.com",
  projectId: "bike-warehouse-74c98",
  storageBucket: "bike-warehouse-74c98.appspot.com",
  messagingSenderId: "400657998596",
  appId: "1:400657998596:web:9d01a8e93afa056643e651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;