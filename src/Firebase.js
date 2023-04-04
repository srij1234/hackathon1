import 'firebase/auth';

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAE3egmS3np4FH2fvQNM87tkEI1USEFiKI",
  authDomain: "hackhack-db78d.firebaseapp.com",
  projectId: "hackhack-db78d",
  storageBucket: "hackhack-db78d.appspot.com",
  messagingSenderId: "535749067895",
  appId: "1:535749067895:web:4c050e4c7cce6842e77272",
  measurementId: "G-91YWELK959"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }; 