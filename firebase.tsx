// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPHEbpTJhZwkEU8TbaNFUF1d_ZvWOcPGk',
  authDomain: 'freshkeeperapp-f28b3.firebaseapp.com',
  projectId: 'freshkeeperapp-f28b3',
  storageBucket: 'freshkeeperapp-f28b3.appspot.com',
  messagingSenderId: '266721437546',
  appId: '1:266721437546:web:a2edefff9db55b1f87a713',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
