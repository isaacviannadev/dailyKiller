import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { User } from '../contexts/AuthContext';
import { database } from './firebase';

const usersCollection = collection(database, 'users');
const userDB = doc(usersCollection);

export async function registerUser(user: User) {
  const userRef = doc(usersCollection, user.email);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    await setDoc(userDB, {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      createdAt: user.createdAt,
      lastLogin: new Date(),
    });

    return true;
  } else {
    updateUserLastLogin(user);
    return false;
  }
}

export async function findUserByEmail(email: string) {
  const queried = await getDocs(
    query(usersCollection, where('email', '==', email))
  );
  const user = queried.docs[0];

  return user?.data();
}

export async function updateUserLastLogin(user: User) {
  const userRef = doc(usersCollection, user.email);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    await setDoc(
      userRef,
      {
        lastLogin: new Date(),
      },
      { merge: true }
    );
  }
}
