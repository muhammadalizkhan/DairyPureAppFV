import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDH_aU6FbBqOdMev-w7ey0xZCa1UxJSr-E",
  authDomain: "dairypureapp.firebaseapp.com",
  projectId: "dairypureapp",
  storageBucket: "dairypureapp.appspot.com",
  messagingSenderId: "49534814437",
  appId: "1:49534814437:android:5d5c919dfbb6173b9f6c0c",
  // measurementId: "G-QPDPVC0Q6N"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {
  auth,
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
};
export default app;
