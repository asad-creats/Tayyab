// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Add this line
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvdUt3tjXQUi3iSci-_pFyapvyimLOxgA",
  authDomain: "webinar-1408b.firebaseapp.com",
  projectId: "webinar-1408b",
  storageBucket: "webinar-1408b.firebasestorage.app",
  messagingSenderId: "133671519975",
  appId: "1:133671519975:web:cbb674c4b85d5b49a14442",
  measurementId: "G-LVNMCQ1JE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Firestore export (now this works)
export const db = getFirestore(app);
