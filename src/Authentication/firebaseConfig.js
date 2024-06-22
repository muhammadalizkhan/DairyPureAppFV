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
    apiKey: "AIzaSyDPjLTQBGbOksgqpQkz_O_yOMomLPkrV1A",
    authDomain: "dpsaas-916cf.firebaseapp.com",
    projectId: "dpsaas-916cf",
    storageBucket: "dpsaas-916cf.appspot.com",
    messagingSenderId: "694809562270",
    appId: "1:694809562270:android:b33272ee65a43b66553f8f",
    measurementId: "G-QPDPVC0Q6N"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

connectAuthEmulator(auth, 'http://localhost:8081');

export {
  auth,
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
};
export default app;
