import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxet6rR5D0kKEvKEdu_ilbN_uWZYh5NZ0",
  authDomain: "crown-web-7b027.firebaseapp.com",
  projectId: "crown-web-7b027",
  storageBucket: "crown-web-7b027.appspot.com",
  messagingSenderId: "597255815235",
  appId: "1:597255815235:web:ed51c5b0087beceb5894f6"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const provider = new GoogleAuthProvider()

/* export default firebase */