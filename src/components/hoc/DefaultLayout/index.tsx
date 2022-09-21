import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import Header from '../../UI/Header';
import { LayoutSC } from './style';

export default function Layout({ children }: any) {
  return (
    <LayoutSC>
      <Header />
      <main>{children}</main>
    </LayoutSC>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies['dailyKiller.token']) {
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
