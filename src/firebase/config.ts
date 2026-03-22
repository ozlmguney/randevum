import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbUHAbgv9MAqgj21QNkwEJMlDKNQp_QCM",
  authDomain: "randevu-4cdb6.firebaseapp.com",
  projectId: "randevu-4cdb6",
  storageBucket: "randevu-4cdb6.firebasestorage.app",
  messagingSenderId: "171880247952",
  appId: "1:171880247952:web:66bc70717ce0cc89df5e15"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);