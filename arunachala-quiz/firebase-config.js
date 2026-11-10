// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdop6sEmzHhRDhAa-2ToafbhEZox4qM8s",
  authDomain: "aws-quiz-web-a1fe6.firebaseapp.com",
  projectId: "aws-quiz-web-a1fe6",
  storageBucket: "aws-quiz-web-a1fe6.firebasestorage.app",
  messagingSenderId: "98547913442",
  appId: "1:98547913442:web:2820c8b75e91284b9604bb",
  measurementId: "G-1DMTTPNMVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);