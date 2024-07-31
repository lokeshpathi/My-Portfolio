// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrBtemupr5YHcnrjNncuXcJgD0vyGyhC0",
  authDomain: "lokesh-portfolio-app.firebaseapp.com",
  projectId: "lokesh-portfolio-app",
  storageBucket: "lokesh-portfolio-app.appspot.com",
  messagingSenderId: "281749298264",
  appId: "1:281749298264:web:b2f5beddac61bec88ebe2d",
  measurementId: "G-9B6LF2NZ22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);