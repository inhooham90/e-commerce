import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0vIjgnT2_KRNYmaHmDrLepHuKi3aO0AI",
  authDomain: "commerce-project-4db9b.firebaseapp.com",
  databaseURL: "https://commerce-project-4db9b.firebaseio.com",
  projectId: "commerce-project-4db9b",
  storageBucket: "commerce-project-4db9b.appspot.com",
  messagingSenderId: "406090121564",
  appId: "1:406090121564:web:00e9be8cfc014b9dbd0199",
  measurementId: "G-1PRQ2Z9K8Y",
};

export const createUserProfileDocument = async (userAuth, data) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;