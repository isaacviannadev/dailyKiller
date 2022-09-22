import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { registerUser } from '../services/firestore';

export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  createdAt: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
  loading: boolean;
  signOut: () => void;
  loggedIn: boolean;
  checkingStatus: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const {
          displayName,
          photoURL,
          uid,
          email,
          metadata: { creationTime },
        } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        const createdFormatDate = new Date(
          '' + creationTime
        ).toLocaleDateString('pt-BR');

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email || '',
          createdAt: createdFormatDate || '',
        });

        setLoggedIn(true);
      } else {
        router.push('/');
      }
      setCheckingStatus(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      registerUser(user);
    }
  }, [user]);

  async function signInWithGoogle() {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    const result = signInWithPopup(auth, provider);

    result
      .then((result) => {
        const {
          displayName,
          photoURL,
          uid,
          email,
          metadata: { creationTime },
        } = result.user;

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        if (token) {
          setCookie(null, 'dailyKiller.token', token, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
          });
        }
        const createdFormatDate = new Date(
          '' + creationTime
        ).toLocaleDateString('pt-BR');

        setUser({
          id: uid,
          name: displayName || 'Usuário Burro que não tem nome',
          avatar: photoURL || '',
          email: email || '',
          createdAt: createdFormatDate || '',
        });

        router.push('/dashboard');
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function signOut() {
    auth
      .signOut()
      .then(() => {
        router.push('/');
      })
      .finally(() => {
        destroyCookie(null, 'dailyKiller.token');
        setUser(undefined);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        signOut,
        loggedIn,
        checkingStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
