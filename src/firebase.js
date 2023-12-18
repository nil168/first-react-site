import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCmDvqPd7lIvi-IvTcWuW9xQaMMqR6dD4',
  authDomain: 'react-portfolio-swapnanil.firebaseapp.com',
  projectId: 'react-portfolio-swapnanil',
  storageBucket: 'react-portfolio-swapnanil.appspot.com',
  messagingSenderId: '485472865588',
  appId: '1:485472865588:web:3a175b15f0415473c1a961',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore();