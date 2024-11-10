import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAsCedtQiZBaM193b2Y3tAqypTmc9ph4k8",
  authDomain: "a-2-z-store.firebaseapp.com",
  projectId: "a-2-z-store",
  storageBucket: "a-2-z-store.appspot.com",
  messagingSenderId: "267943874295",
  appId: "1:267943874295:web:519b83c83d3d9e688d0df2",
  measurementId: "G-TGS6LWZBXD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const fireDB= getFirestore(app);
export {fireDB,auth } ;