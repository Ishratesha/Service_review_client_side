// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// REACT_APP_apiKey=AIzaSyBfB6RMIGLWCy0EE7-6mIA6il4Q1VxJgCY
// REACT_APP_authDomain=jahankitchen-a78bc.firebaseapp.com
// REACT_APP_projectId=jahankitchen-a78bc
// REACT_APP_storageBucket=jahankitchen-a78bc.appspot.com
// REACT_APP_messagingSenderId=873462740917
// REACT_APP_appId=1:873462740917:web:8fe376ad3217ba374ecbfc
// REACT_APP_measurementId=G-H4KFY6903S
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;