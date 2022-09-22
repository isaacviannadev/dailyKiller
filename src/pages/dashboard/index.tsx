import Head from 'next/head';
import { ReactElement } from 'react';
import DefaultLayout from '../../components/hoc/DefaultLayout';
import ProfileCard from '../../components/molecules/ProfileCard';
import UnMotivated from '../../components/molecules/UnMotivated';
import Divider from '../../components/UI/DIvider';
import { useAuth } from '../../hooks/useAuth';
import { NextPageWithLayout } from '../_app';

const Dashboard: NextPageWithLayout = () => {
  const { user, loggedIn } = useAuth();

  if (!loggedIn) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Head>
        <title>Dashboard | dailyKiller</title>
      </Head>

      <div className='profile'>
        <ProfileCard />
      </div>

      <div className='motivation'>
        <UnMotivated />
        <Divider />
      </div>

      <div className='description'>
        <h3>
          Aqui você realmente não tem muita coisa pra fazer, a ideia é vc ficar
          o mínimo possível logado aqui.
        </h3>
        <p>
          (nós também não queremos dar suporte, então se vira com o que tem)
        </p>
      </div>

      <div className='board'>
        <h1>Board</h1>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Dashboard;
