import { collection, doc, setDoc } from 'firebase/firestore';
import { User } from '../contexts/AuthContext';
import { database } from './firebase';

const usersCollection = collection(database, 'users');
const userDB = doc(usersCollection, 'user');

export async function registerUser(user: User) {
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
