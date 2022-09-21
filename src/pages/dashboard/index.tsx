import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { ReactElement } from 'react';
import DefaultLayout from '../../components/hoc/DefaultLayout';
import { useAuth } from '../../hooks/useAuth';
import { NextPageWithLayout } from '../_app';

const Dashboard: NextPageWithLayout = () => {
  const { user, signOut } = useAuth();

  const cookie = parseCookies();

  console.log(cookie, user, 'cookie');

  return (
    <>
      <Head>
        <title>Dashboard | dailyKiller</title>
      </Head>
      <h1>Dashboard</h1>
      <p>Usuário logado</p>
      <p>{user?.name} </p>
      <p>{user?.email} </p>

      {user?.avatar && (
        <Image src={user?.avatar} alt={user?.name} width={200} height={200} />
      )}

      <button onClick={signOut}>Deslogar</button>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['dailykiller.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
