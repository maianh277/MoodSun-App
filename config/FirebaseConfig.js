// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeqjT27fDE2eVhpVyE9rA1U2dHXg8Szm8",
  authDomain: "moodsun-app.firebaseapp.com",
  projectId: "moodsun-app",
  storageBucket: "moodsun-app.appspot.com",
  messagingSenderId: "835611736016",
  appId: "1:835611736016:web:7c8b868251dad669feebd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
