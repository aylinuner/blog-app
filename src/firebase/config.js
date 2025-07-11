// Firebase modülünü yüklüyoruz (v8)
import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase yapılandırma
const firebaseConfig = {
  apiKey: "AIzaSyCre5qHgKbw0oFO7gANlXxx92Q2cpF_AaM",
  authDomain: "vue3-firebase-projeler-8b9eb.firebaseapp.com",
  projectId: "vue3-firebase-projeler-8b9eb",
  storageBucket: "vue3-firebase-projeler-8b9eb.firebasestorage.app",
  messagingSenderId: "1090191809786",
  appId: "1:1090191809786:web:67df737b889226e303bd43"
};

// Uygulamayı başlat
firebase.initializeApp(firebaseConfig);

// Firestore referansını oluştur
const db = firebase.firestore();

//server'ın o anki tarihini almış olacağız.
const timestamp=firebase.firestore.FieldValue.serverTimestamp
// Firestore'u dışa aktar 

//timestamp export yapalımki başka bi yerde de kullanabilelim.
export { db,timestamp };
