// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDH78AUOtqbdkmJiKLLLjY8Ho5_l4l1KfY",
    authDomain: "challenge-39479.firebaseapp.com",
    projectId: "challenge-39479",
    storageBucket: "challenge-39479.appspot.com",
    messagingSenderId: "1077193822020",
    appId: "1:1077193822020:web:4218af04598f2ea1ac1111",
    measurementId: "G-6498R6TDQ6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};
