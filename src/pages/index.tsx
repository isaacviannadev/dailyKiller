import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { useAuth } from '../hooks/useAuth';

import Head from 'next/head';
import logoImg from '../assets/dklogo.svg';
import Button from '../components/UI/Button';
import { CardPrincipalSC, ContainerSC } from '../styles/pages/home';

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

      <ContainerSC>
        <CardPrincipalSC>
          <div>
            <Image src={logoImg} alt='Logo' />
            <h1>Mate sua daily, antes que ela te mate!</h1>
          </div>

          <Button
            type='button'
            isLoading={loading}
            onClick={handleSignInWithGoogle}
            disabled={loading}
          >
            Entrar com o Google
          </Button>
        </CardPrincipalSC>
      </ContainerSC>
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
