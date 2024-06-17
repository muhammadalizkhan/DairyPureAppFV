import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCi2_v_VKMWrnll962io-mWQ5SA22n46XA",
    authDomain: "dpsaas-916cf.firebaseapp.com",
    projectId: "dpsaas-916cf",
    storageBucket: "dpsaas-916cf.appspot.com",
    messagingSenderId: "694809562270",
    appId: "1:694809562270:web:f3143c9043315503553f8f",
    measurementId: "G-QPDPVC0Q6N"
  }

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app