import firebase from "firebase/app"



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXnDzzSrq-6udE8FgJnQCGMaiQxENSIbY",
  authDomain: "catchmyweb-3336b.firebaseapp.com",
  projectId: "catchmyweb-3336b",
  storageBucket: "catchmyweb-3336b.appspot.com",
  messagingSenderId: "23695593355",
  appId: "1:23695593355:web:5281a6c568b335d1a6a98e",
  measurementId: "G-KPL49W043T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);