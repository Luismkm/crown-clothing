import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGIurvq2aLkgRd65d5G6CzCPwbIxnEb8c",
  authDomain: "crwn-shop-b6e41.firebaseapp.com",
  projectId: "crwn-shop-b6e41",
  storageBucket: "crwn-shop-b6e41.appspot.com",
  messagingSenderId: "843166424552",
  appId: "1:843166424552:web:6e98bd4faa47ea51ac585d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
    
  }
  return userDocRef
}

