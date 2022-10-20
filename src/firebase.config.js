
import{getApp, getApps, initializeApp } from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDpJu1QK6ZtK3g6UJxo0lqvNCTTm4oPlzQ",
  authDomain: "mama-cook-c8fe0.firebaseapp.com",
  databaseURL: "https://mama-cook-c8fe0-default-rtdb.firebaseio.com",
  projectId: "mama-cook-c8fe0",
  storageBucket: "mama-cook-c8fe0.appspot.com",
  messagingSenderId: "1040658349114",
  appId: "1:1040658349114:web:fec5d87e3ed9f5b9b18903",
  measurementId: "G-SP0DKEB384"
};
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export{ app, firestore, storage}