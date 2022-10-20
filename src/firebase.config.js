
import{getApp, getApps, initializeApp } from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBvFrCkeHoX3s0zY9R4tma11dIWL0mQMe0",
    authDomain: "prototype-b8a28.firebaseapp.com",
    databaseURL: "https://prototype-b8a28-default-rtdb.firebaseio.com",
    projectId: "prototype-b8a28",
    storageBucket: "prototype-b8a28.appspot.com",
    messagingSenderId: "789085467824",
    appId: "1:789085467824:web:4d67a3179d782c880d3775"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export{ app, firestore, storage}