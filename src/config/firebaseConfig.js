//import { initializeApp } from "firebase";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCYtN_GB0N_nEGPyk7FvJxanp_haXopyEo",
    authDomain: "buddha-planner.firebaseapp.com",
    databaseURL: "https://buddha-planner.firebaseio.com",
    projectId: "buddha-planner",
    storageBucket: "buddha-planner.appspot.com",
    messagingSenderId: "306964920082",
    appId: "1:306964920082:web:4144cb234366caf93a25cb",
    measurementId: "G-E93TMR434V"
  };
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase