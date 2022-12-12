import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDPHEbpTJhZwkEU8TbaNFUF1d_ZvWOcPGk',
  authDomain: 'freshkeeperapp-f28b3.firebaseapp.com',
  projectId: 'freshkeeperapp-f28b3',
  storageBucket: 'freshkeeperapp-f28b3.appspot.com',
  messagingSenderId: '266721437546',
  appId: '1:266721437546:web:a2edefff9db55b1f87a713',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
