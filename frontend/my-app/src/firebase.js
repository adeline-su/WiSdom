// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import { getDatabase } from "firebase/database";

//may delete
//import firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBip9y6etWgl_mN6xUyxXFo8vZAa8rBToU",
  authDomain: "wisdom-fdb61.firebaseapp.com",
  databaseURL: "https://wisdom-fdb61-default-rtdb.firebaseio.com",
  projectId: "wisdom-fdb61",
  storageBucket: "wisdom-fdb61.appspot.com",
  messagingSenderId: "1013392888504",
  appId: "1:1013392888504:web:5d98b82fbb70c1df261a4d",
  measurementId: "G-E7W6BSLW3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
const db = getFirestore(app);


//may delete

export  { app, db}
//export default database;
