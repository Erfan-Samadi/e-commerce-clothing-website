import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDocs, getDoc, setDoc, collection, doc } from "firebase/firestore";

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
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider()

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = doc(db, `users/${userAuth.uid}`)

  try {
    const snapShot = await getDoc(userRef)
    console.log(snapShot)

    if (snapShot) {
      const { displayName, email } = userAuth
      const createdAt = new Date()
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        })

        console.log(userRef)
      } catch (err) {
        console.error(err)
      }
      
    }

    
  } catch (err) {
    console.error(err)
  }
  
}
