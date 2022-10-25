import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from '../contexts/AuthContext';
import { database } from './firebase';

const usersCollection = collection(database, 'users');
const userDB = doc(usersCollection);

export async function registerUser(user: User) {
  const userRef = doc(usersCollection, user.id);
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
    try {
      const userDoc = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        lastLogin: new Date(),
        createdAt: user.createdAt,
        id: user.id,
      };

      await setDoc(userDB, userDoc, { merge: true });

      console.log(`User ${user.name} registered successfully!`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
