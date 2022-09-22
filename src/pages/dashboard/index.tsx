import Head from 'next/head';
import { ReactElement } from 'react';
import DefaultLayout from '../../components/hoc/DefaultLayout';
import DescriptionBox from '../../components/molecules/DescriptionBox';
import ProfileCard from '../../components/molecules/ProfileCard';
import UnMotivation from '../../components/molecules/UnMotivation';
import Box from '../../components/UI/Box';
import Card from '../../components/UI/Card';
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
        <UnMotivation />
        <Divider />
      </div>

      <div className='description'>
        <DescriptionBox
          description='Aqui você realmente não tem muita coisa pra fazer, a ideia é vc ficar
          o mínimo possível logado aqui.'
          desabafo='(nós também não queremos dar suporte, então se vira com o que tem)'
        />
      </div>

      <div className='board'>
        <Card title='Estatísticas'>
          <Box padding='20px'>
            <DescriptionBox
              description='Aqui você pode ver algumas estatísticas sobre o seu desempenho no dailyKiller'
              desabafo='(não tem nada aqui ainda, mas logo logo vai ter)'
            />
          </Box>
        </Card>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Dashboard;
