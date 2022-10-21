// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-I6OcWukJnS_vF98s_cvKGDICh0adOJ4",
  authDomain: "danger-news-client.firebaseapp.com",
  projectId: "danger-news-client",
  storageBucket: "danger-news-client.appspot.com",
  messagingSenderId: "286951169169",
  appId: "1:286951169169:web:aa1f36dfef75e1ae70b330",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
