import app from '../config/firebaseConfig'

import { doc, getDoc, setDoc, updateDoc, increment,getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export async function incrementVisitorCount() {
  const docRef = doc(db, "stats", "visitors");

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { count: increment(1) });
  } else {
    await setDoc(docRef, { count: 1 });
  }
}

export async function getVisitorCount() {
  const docRef = doc(db, "stats", "visitors");
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().count : 0;
}

export async function incrementTotalLikeCount() {
  const docRef = doc(db, "stats", "totalLikes");

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { count: increment(1) });
  } else {
    await setDoc(docRef, { count: 1 });
  }
}

