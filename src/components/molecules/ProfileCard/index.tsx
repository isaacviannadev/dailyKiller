/* eslint-disable @next/next/no-img-element */
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../UI/Button';
import Divider from '../../UI/DIvider';
import {
  AvatarSC,
  ProfileCardInfoDivSC,
  ProfileCardInfoSC,
  ProfileCardSC,
  ProfileCardWrapperSC,
} from './style';

const ProfileCard = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <ProfileCardWrapperSC>
      <AvatarSC>
        {user && user.avatar && <img src={user.avatar} alt={user.name} />}
      </AvatarSC>
      <ProfileCardSC>
        <h1>{user?.name}</h1>
        <Divider />

        <ProfileCardInfoDivSC>
          <ProfileCardInfoSC>
            <img src='/assets/icons/shuriken.svg' alt='Contato' />
            <span>Contato</span>
            <p>{user?.email}</p>
          </ProfileCardInfoSC>

          <ProfileCardInfoSC>
            <img src='/assets/icons/skull.svg' alt='Desde...' />
            <span>Matando dailys desde</span>
            <p>{user?.createdAt}</p>
          </ProfileCardInfoSC>
        </ProfileCardInfoDivSC>

        <h1>Suas opções</h1>
        <Divider />

        <ProfileCardInfoDivSC style={{ justifyContent: 'space-between' }}>
          <ProfileCardInfoDivSC style={{ padding: '0' }}>
            <Button fullWidth size='lg'>
              Criar um time
            </Button>
            <Button fullWidth size='lg'>
              Ver meu time
            </Button>
            <Button fullWidth variant='secondary' size='lg'>
              Pedir demissão e ser feliz
            </Button>
          </ProfileCardInfoDivSC>

          <small>
            Não tem o que procura?
            <br /> Ótimo, nem vai ter!
          </small>
        </ProfileCardInfoDivSC>
      </ProfileCardSC>
    </ProfileCardWrapperSC>
  );
};

export default ProfileCard;
