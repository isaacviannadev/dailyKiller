import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { useAuth } from '../hooks/useAuth';

import Head from 'next/head';
import logoImg from '../assets/dklogo.svg';
import Button from '../components/UI/Button';

export default function Home() {
  const { loading, signInWithGoogle } = useAuth();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <>
      <Head>
        <title>Home | dailyKiller</title>
      </Head>
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

        <Button
          type='button'
          isLoading={loading}
          onClick={handleSignInWithGoogle}
          disabled={loading}
        >
          Entrar com o Google
        </Button>
      </div>
    </>
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
