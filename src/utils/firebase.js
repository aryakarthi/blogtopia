import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blogtopia-app.firebaseapp.com",
  projectId: "blogtopia-app",
  storageBucket: "blogtopia-app.appspot.com",
  messagingSenderId: "168343865203",
  appId: "1:168343865203:web:ba01c679a3f0af4262a706",
};

export const app = initializeApp(firebaseConfig);
