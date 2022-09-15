import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { loading, signInWithGoogle } = useAuth();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <div>
      <h1>dailyKiller</h1>
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
