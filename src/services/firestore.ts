import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { SelectedUser } from '../components/molecules/AutoComplete';
import { User } from '../contexts/AuthContext';
import { database } from './firebase';

const usersCollection = collection(database, 'users');
const teamsCollection = collection(database, 'teams');
const userDB = doc(usersCollection);
const teamDB = doc(teamsCollection);

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

export type Team = {
  name: string;
  description: string;
  owner: User;
  members: SelectedUser[];
};

export async function createTeam(team: Team) {
  await setDoc(teamDB, {
    name: team.name,
    description: team.description,
    members: team.members,
    owner: team.owner,
    createdAt: new Date(),
  });

  return true;
}
