// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Esta es la función que falta
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfQB4oH07IZHPnyzE6w9hvsPNGxjDooMY",
  authDomain: "ventadebotines-7925c.firebaseapp.com",
  projectId: "ventadebotines-7925c",
  storageBucket: "ventadebotines-7925c.firebasestorage.app",
  messagingSenderId: "1065846557404",
  appId: "1:1065846557404:web:f9f4c4ea6f019805fb4219",
  measurementId: "G-Z2CWQLBMPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de Firestore
const db = getFirestore(app);

// Obtén la instancia de Auth (si la estás utilizando)
const auth = getAuth(app);

export { db, auth }; // Exporta db y auth si los necesitas