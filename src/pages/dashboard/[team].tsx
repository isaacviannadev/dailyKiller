import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import DefaultLayout from '../../components/hoc/DefaultLayout';
import { useAuth } from '../../hooks/useAuth';
import { NextPageWithLayout } from '../_app';

const Team: NextPageWithLayout = () => {
  const { loggedIn } = useAuth();
  const router = useRouter();
  const { team } = router.query;

  if (!loggedIn) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Head>
        <title>Dashboard | dailyKiller</title>
      </Head>

      <h1>Team {team}</h1>
    </>
  );
};

Team.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Team;
