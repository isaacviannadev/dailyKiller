/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useAuth } from '../hooks/useAuth';

import Head from 'next/head';
import Button from '../components/UI/Button';
import {
  CardPrincipalSC,
  ContainerSC,
  DivButtonHomeSC,
} from '../styles/pages/home';

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();

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
          <div className='ladoA'>
            <img src='/assets/dklogo.svg' alt='Logo' />
            <h1>
              Mate sua daily, <br /> antes que ela te mate!
            </h1>

            <DivButtonHomeSC>
              <Button
                type='button'
                isLoading={loading}
                onClick={handleSignInWithGoogle}
                disabled={loading}
                variant='tertiary'
                size='lg'
              >
                Entrar com o Google
              </Button>
              <small>
                <b>*</b> Na real, você não precisa desse app, era só mandar uma
                mensagem no grupo
              </small>
            </DivButtonHomeSC>
          </div>
          <div className='ladoB'>
            <img src='/assets/handHome.svg' alt='Mão dando dedo do meio' />
          </div>
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
