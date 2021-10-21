import firebase from 'firebase';
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCRu6Fr3xCQKsMlXeHcmgim3s5VAN42G9M",
  authDomain: "salvatienda-e1fc9.firebaseapp.com",
  projectId: "salvatienda-e1fc9",
  storageBucket: "salvatienda-e1fc9.appspot.com",
  messagingSenderId: "534668154821",
  appId: "1:534668154821:web:4026f02255217ae9fcddac"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app
}

export function getFirestore(){
  return firebase.firestore(app)
}