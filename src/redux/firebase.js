// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: insert firebase config
var firebaseConfig = {
    apiKey: "AIzaSyDeDcun-LZ-XnIUhKwlrun0Sby_rfchLZo",
    authDomain: "react-core-81fe3.firebaseapp.com",
    databaseURL: "https://react-core-81fe3.firebaseio.com",
    projectId: "react-core-81fe3",
    storageBucket: "react-core-81fe3.appspot.com",
    messagingSenderId: "758335765254",
    appId: "1:758335765254:web:fbffecd2902b4a64"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;