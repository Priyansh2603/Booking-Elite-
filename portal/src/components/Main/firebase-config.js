import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBUV4Dbv6Z2MimSeMeddMUCuEyJXnIt5B8",
    authDomain: "my-first-firebase-77d9a.firebaseapp.com",
    projectId: "my-first-firebase-77d9a",
    storageBucket: "my-first-firebase-77d9a.appspot.com",
    messagingSenderId: "159827827078",
    appId: "1:159827827078:web:f06f67c3cc8490476d7407",
    measurementId: "G-YKEDMZ9614"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)