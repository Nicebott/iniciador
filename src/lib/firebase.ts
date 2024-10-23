import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDNRrGuZup-XwSiwwVeCNVf3ATbUirT8bY",
  authDomain: "login-15bf4.firebaseapp.com",
  projectId: "login-15bf4",
  storageBucket: "login-15bf4.appspot.com",
  messagingSenderId: "247875099244",
  appId: "1:247875099244:web:131ddb5b87b4f57f21d649",
  measurementId: "G-EW6VGY2RH2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

// Configure Google Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});