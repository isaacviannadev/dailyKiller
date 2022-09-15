import Image from 'next/image';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Usuário logado</p>

      <p>{user?.name} </p>
      <p>{user?.email} </p>

      {user?.avatar && (
        <Image src={user?.avatar} alt={user?.name} width={200} height={200} />
      )}

      <button onClick={signOut}>Deslogar</button>
    </div>
  );
};

export default Dashboard;
