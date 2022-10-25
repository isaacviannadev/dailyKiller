import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/useAuth';
import { createTeam } from '../../../services/firestore';
import Button from '../../UI/Button';
import { Input } from '../../UI/Input';
import Modal from '../../UI/Modal';
import { AutoComplete, SelectedUser } from '../AutoComplete';
import { FormContent } from './style';

type ModalCreateTeamProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalCreateTeam = ({ isOpen, onClose }: ModalCreateTeamProps) => {
  const { user } = useAuth();
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState<SelectedUser[]>([]);
  const [teamDescription, setTeamDescription] = useState('');
  const [error, setError] = useState({} as { [key: string]: string });

  const handleAddMember = (member: SelectedUser) => {
    setTeamMembers([...teamMembers, member]);
  };

  const handleRemoveMember = (member: SelectedUser) => {
    setTeamMembers(teamMembers.filter((m) => m !== member));
  };

  const handleCreateTeam = async () => {
    if (!teamName) {
      setError((prev) => ({
        ...prev,
        teamName: 'Nome do time é o mínimo né! Preguiçoso!',
      }));
      return;
    }

    if (user) {
      const team = {
        name: teamName,
        description: teamDescription,
        members: teamMembers,
        owner: user,
      };

      createTeam(team)
        .then(() => {
          toast.success('Team criado com sucesso!');
          setTimeout(() => {
            onClose();
          }, 1000);
        })
        .catch((err) => {
          toast.error('Erro ao criar o time');
          console.log(err);
        });
    }
  };

  function handleValueChange(value: string, name: string) {
    if (name === 'teamName') {
      setTeamName(value);
      setError((prev) => ({ ...prev, teamName: '' }));
    } else if (name === 'teamDescription') {
      setTeamDescription(value);
    }
  }

  const Footer = (
    <>
      <Button variant='secondary' onClick={onClose}>
        Fechar
      </Button>
      <Button variant='tertiary' onClick={handleCreateTeam}>
        Criar time
      </Button>
    </>
  );

  return (
    <>
      <Modal
        size='lg'
        title='Criar time'
        isOpen={isOpen}
        onClose={onClose}
        footer={Footer}
      >
        <FormContent>
          <Input
            label='Nome do time'
            placeholder='Digite o nome do time'
            onChange={(e) => handleValueChange(e.target.value, 'teamName')}
            hasError={!!error.teamName}
            error={error.teamName}
          />
          <Input
            label='Descrição'
            placeholder='Digite a descrição do time'
            onChange={(e) =>
              handleValueChange(e.target.value, 'teamDescription')
            }
          />
          <AutoComplete
            onSelect={(option) => handleAddMember(option)}
            onRemove={(option) => handleRemoveMember(option)}
            selecteds={teamMembers}
          />
        </FormContent>
      </Modal>
    </>
  );
};

export default ModalCreateTeam;
