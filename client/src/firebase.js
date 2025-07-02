// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6991d.firebaseapp.com",
  projectId: "mern-blog-6991d",
  storageBucket: "mern-blog-6991d.firebasestorage.app",
  messagingSenderId: "268825712799",
  appId: "1:268825712799:web:2e3a52b5ee6d156523eaaa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);