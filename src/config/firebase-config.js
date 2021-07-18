import React from 'react';
import firebase from 'firebase';



  const firebaseConfig = {
    apiKey: "AIzaSyBXdMJ5mO1PigFph9EmFOnxij0_EO4l200",
    authDomain: "internship-a1455.firebaseapp.com",
    projectId: "internship-a1455",
    storageBucket: "internship-a1455.appspot.com",
    messagingSenderId: "591582070197",
    appId: "1:591582070197:web:694e335587bef1747705fc",
    measurementId: "G-YTHJZ5EQ33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;