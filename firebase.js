import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfrs9WI-YLFIbDi73EOvcxgzcr5PSWH_Y",
    authDomain: "cardapp-69e48.firebaseapp.com",
    databaseURL: "https://cardapp-69e48-default-rtdb.firebaseio.com",
    projectId: "cardapp-69e48",
    storageBucket: "cardapp-69e48.appspot.com",
    messagingSenderId: "695107404037",
    appId: "1:695107404037:web:c9e34ed892c738be5b776c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getDatabase(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
        db, ref, set, child, get, remove }

