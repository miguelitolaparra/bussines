import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC5ud9aQ5qg16bl-wYXwyPQRS6T9xDkVj8",
    authDomain: "empresas-5-estrellas.firebaseapp.com",
    projectId: "empresas-5-estrellas",
    storageBucket: "empresas-5-estrellas.appspot.com",
    messagingSenderId: "5787716445",
    appId: "1:5787716445:web:a8cb00f1b3cf9c5ccab6b4"
}

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig)
export const db = getFirestore(initFirebase)
