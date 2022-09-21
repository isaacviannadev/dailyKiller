import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import DefaultLayout from '../../components/hoc/DefaultLayout';
import ProfileCard from '../../components/molecules/ProfileCard';
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
        <h1></h1>
      </div>

      <div className='description'>
        {user?.avatar && (
          <Image src={user?.avatar} alt={user?.name} width={200} height={200} />
        )}
      </div>

      <div className='board'>
        <p>{user?.name} </p>
        <p>{user?.email} </p>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Dashboard;
