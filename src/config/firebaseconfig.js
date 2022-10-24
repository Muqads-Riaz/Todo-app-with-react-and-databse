// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnEWGCBRmrJclfxrBw9wQiW7e9IS6GGU",
  authDomain: "todo-app-with-databse.firebaseapp.com",
  projectId: "todo-app-with-databse",
  storageBucket: "todo-app-with-databse.appspot.com",
  messagingSenderId: "748152780496",
  appId: "1:748152780496:web:87cbf527cf42aaaf2c90d5",
  measurementId: "G-DP6F0JVDBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
