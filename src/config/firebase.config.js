// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0Lw_DxspvkUEguGtIIqZOYw_bTB1pTKo',
  authDomain: 'daily-digest-49d08.firebaseapp.com',
  projectId: 'daily-digest-49d08',
  storageBucket: 'daily-digest-49d08.firebasestorage.app',
  messagingSenderId: '208075804243',
  appId: '1:208075804243:web:0e9d300b9d190265bd40a6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }
