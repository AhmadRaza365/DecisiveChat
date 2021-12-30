import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "[Replace with your]",
    authDomain: "[Replace with your]",
    projectId: "[Replace with your]",
    storageBucket: "[Replace with your]",
    messagingSenderId: "[Replace with your]",
    appId: "[Replace with your]",
    measurementId: "[Replace with your]"
 

});

const db = firebaseApp.firestore();


export default db;