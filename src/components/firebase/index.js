import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const config = {
  apiKey: "AIzaSyBIsujwL3NFpQALwua-zz0oq23PfqIsksE",
  authDomain: "task-445fe.firebaseapp.com",
  databaseURL: "https://task-445fe-default-rtdb.firebaseio.com",
  projectId: "task-445fe",
  storageBucket: "task-445fe.appspot.com",
  messagingSenderId: "952951940109",
  appId: "1:952951940109:web:f88fe5799d41a286192144",
};

export const app = initializeApp(config);
export const db = getDatabase(app);
