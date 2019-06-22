// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
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
const db = firebase.firestore();

export default firebase;

export const createDocument = (collection, data) => {
    console.log('attempt create document')
    db.collection(collection).add(data)
        .then((docRef) => {
            console.log(`document created in ${collection}`, docRef);
            return docRef;
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
}

// returns (on success): querySnapshot
/*
querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
    });
*/
export const readCollection = (collection) => {
    console.log('attempt read collection');
    db.collection(collection).get()
        .then((querySnapshot) => {
            console.log(`read collection: ${collection}`)
            return querySnapshot;
        })
        .catch((err) => {
            console.log(err);
            return false;
        })
}