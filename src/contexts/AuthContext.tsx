import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
  loading: boolean;
  signOut: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email || '',
        });

        // router.push('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    const result = signInWithPopup(auth, provider);

    result
      .then((result) => {
        const { displayName, photoURL, uid, email } = result.user;

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        if (token) {
          setCookie(null, 'dailyKiller.token', token, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
          });
        }

        setUser({
          id: uid,
          name: displayName || 'Usuário Burro que não tem nome',
          avatar: photoURL || '',
          email: email || '',
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
    auth.signOut();
    setUser(undefined);
    destroyCookie(null, 'dailyKiller.token');
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
