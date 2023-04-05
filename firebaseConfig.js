// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCWmIYfqfby2OvT-ClCJ-X7-Ja9Argnrgw",
	authDomain: "password-generator-bab92.firebaseapp.com",
	projectId: "password-generator-bab92",
	storageBucket: "password-generator-bab92.appspot.com",
	messagingSenderId: "688001621550",
	appId: "1:688001621550:web:b2e86290a1b0607dd909bf",
	measurementId: "G-NKZHC6CKC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
