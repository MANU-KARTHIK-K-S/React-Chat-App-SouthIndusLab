import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// from army indian acc
const firebaseConfig = {
  apiKey: "AIzaSyCRNzt6mbEFk90Wqu9P0R_3wqx1_-N_1Ck",
  authDomain: "southinduslab-react-chatapp.firebaseapp.com",
  projectId: "southinduslab-react-chatapp",
  storageBucket: "southinduslab-react-chatapp.appspot.com",
  messagingSenderId: "885058468112",
  appId: "1:885058468112:web:d3644cb3140da421f18d95",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
