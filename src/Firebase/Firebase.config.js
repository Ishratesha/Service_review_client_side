// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// apiKey: "AIzaSyB8U6Q8opM-OoZ-qG559gURTJXL-KkkD3I",
//   authDomain: "zahankitchen-3e7cc.firebaseapp.com",
//   projectId: "zahankitchen-3e7cc",
//   storageBucket: "zahankitchen-3e7cc.appspot.com",
//   messagingSenderId: "39916541109",
//   appId: "1:39916541109:web:bf96917e400bb18ee59afc"
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