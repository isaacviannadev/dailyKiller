import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

const Project = () => {
  const router = useRouter();
  const { project } = router.query;

  return (
    <div>
      <h1>Project {project}</h1>
    </div>
  );
};

export default Project;

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
