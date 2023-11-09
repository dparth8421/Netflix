// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8nDf-S5ykKwTZIY4tg_wkCFcfW56s_lc",
  authDomain: "netfilx-ce22e.firebaseapp.com",
  projectId: "netfilx-ce22e",
  storageBucket: "netfilx-ce22e.appspot.com",
  messagingSenderId: "509711052105",
  appId: "1:509711052105:web:98bc4b51b41ce4721c7e98",
  measurementId: "G-KG16M615M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
