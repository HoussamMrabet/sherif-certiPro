import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbMmSh-EVI7dkhQ89P1EqhFQcznexBhsU",
  authDomain: "crud-8d516.firebaseapp.com",
  projectId: "crud-8d516",
  storageBucket: "crud-8d516.appspot.com",
  messagingSenderId: "811238590978",
  appId: "1:811238590978:web:ebdae52a3b820062c3351b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
