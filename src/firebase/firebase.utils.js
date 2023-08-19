import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCxet6rR5D0kKEvKEdu_ilbN_uWZYh5NZ0",
  authDomain: "crown-web-7b027.firebaseapp.com",
  projectId: "crown-web-7b027",
  storageBucket: "crown-web-7b027.appspot.com",
  messagingSenderId: "597255815235",
  appId: "1:597255815235:web:ed51c5b0087beceb5894f6"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt:"select-account" })
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase