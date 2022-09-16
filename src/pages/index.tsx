import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/logoTemp.png';

export default function Home() {
  const { loading, signInWithGoogle } = useAuth();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '200px' }}>
        <Image src={logoImg} alt='Logo' />
      </div>
      <h2>Mate sua daily, antes que ela te mate!</h2>

      <button type='button' onClick={handleSignInWithGoogle}>
        {loading ? 'Loading...' : 'Entrar com o Google'}
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies['dailyKiller.token']) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
