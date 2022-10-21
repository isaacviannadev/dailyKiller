/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../UI/Button';
import Divider from '../../UI/DIvider';
import ModalCreateTeam from '../ModalCreateTeam';
import {
  AvatarSC,
  ProfileCardInfoDivSC,
  ProfileCardInfoSC,
  ProfileCardSC,
  ProfileCardWrapperSC,
} from './style';

const ProfileCard = () => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <ProfileCardWrapperSC>
        <AvatarSC>
          {user && user.avatar && (
            <img
              src={user.avatar}
              alt={user.name}
              referrerPolicy='no-referrer'
            />
          )}
        </AvatarSC>
        <ProfileCardSC>
          <ProfileCardInfoDivSC style={{ paddingTop: '0' }}>
            <ProfileCardInfoSC>
              <h1>{user?.name}</h1>
              <Divider />
            </ProfileCardInfoSC>
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

          <ProfileCardInfoDivSC style={{ justifyContent: 'space-between' }}>
            <ProfileCardInfoSC>
              <h1>Suas opções</h1>
              <Divider />
            </ProfileCardInfoSC>
            <ProfileCardInfoDivSC
              style={{ padding: '0' }}
              className={isMobile ? 'mobile' : ''}
            >
              <Button
                fullWidth={!isMobile}
                size={isMobile ? 'sm' : 'lg'}
                onClick={handleModal}
              >
                Criar um time
              </Button>
              <Button fullWidth={!isMobile} size={isMobile ? 'sm' : 'lg'}>
                Ver meu time
              </Button>
              <Button
                fullWidth={!isMobile}
                variant='secondary'
                size={isMobile ? 'sm' : 'lg'}
              >
                Pedir demissão e ser feliz
              </Button>
            </ProfileCardInfoDivSC>
            <ProfileCardInfoSC>
              <small>Não tem o que procura? Ótimo, nem vai ter!</small>
            </ProfileCardInfoSC>
          </ProfileCardInfoDivSC>
        </ProfileCardSC>
      </ProfileCardWrapperSC>

      {isModalOpen && (
        <ModalCreateTeam isOpen={isModalOpen} onClose={handleModal} />
      )}
    </>
  );
};

export default ProfileCard;
