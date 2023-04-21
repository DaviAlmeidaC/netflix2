// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9FLTKXMHiv9A58Vss6S8l2UAEWPdp0mY",
  authDomain: "teste-5aae9.firebaseapp.com",
  projectId: "teste-5aae9",
  storageBucket: "teste-5aae9.appspot.com",
  messagingSenderId: "1025814991585",
  appId: "1:1025814991585:web:bd227e5a8169046c719da0",
  measurementId: "G-K8VXGN21QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9FLTKXMHiv9A58Vss6S8l2UAEWPdp0mY",
    authDomain: "teste-5aae9.firebaseapp.com",
    projectId: "teste-5aae9",
    storageBucket: "teste-5aae9.appspot.com",
    messagingSenderId: "1025814991585",
    appId: "1:1025814991585:web:bd227e5a8169046c719da0",
    measurementId: "G-K8VXGN21QF"
  };

  import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

