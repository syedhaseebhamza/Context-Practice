///////..................////

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuy8ADP16Kbv1S98E_nvkJdJIkLW9Sk_4",
  authDomain: "fir-signup-64d7f.firebaseapp.com",
  projectId: "fir-signup-64d7f",
  storageBucket: "fir-signup-64d7f.appspot.com",
  messagingSenderId: "606936369403",
  appId: "1:606936369403:web:c9587a758def91b5d2085e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitProvider = new GithubAuthProvider();
export { app, auth, googleProvider, fbProvider, gitProvider };
