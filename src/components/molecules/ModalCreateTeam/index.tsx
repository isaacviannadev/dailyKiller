import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { findUserByEmail } from '../../../services/firestore';
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
  const [error, setError] = useState('');

  const handleAddMember = (member: SelectedUser) => {
    setTeamMembers([...teamMembers, member]);
  };

  const handleRemoveMember = (member: SelectedUser) => {
    setTeamMembers(teamMembers.filter((m) => m !== member));
  };

  const handleCreateTeam = async () => {
    if (!teamName) {
      setError('Team name is required');
      return;
    }

    if (teamMembers.length === 0) {
      setError('Team members are required');
      return;
    }

    const team = {
      name: teamName,
      description: teamDescription,
      members: teamMembers,
    };

    console.log(team);
  };

  const Footer = (
    <>
      <Button variant='secondary' onClick={onClose}>
        Fechar
      </Button>
      <Button variant='tertiary' onClick={onClose}>
        Criar time
      </Button>
    </>
  );

  const payload = {
    name: teamName,
    description: teamDescription,
    members: teamMembers,
    owner: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    },
    createdAt: new Date(),
  };

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function autocomplete(input: string) {
    findUserByEmail(input);
  }

  return (
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
          onChange={(e) => setTeamName}
        />
        <Input
          label='Descrição'
          placeholder='Digite a descrição do time'
          onChange={(e) => setTeamDescription}
        />
        <AutoComplete
          onSelect={(option) => handleAddMember(option)}
          onRemove={(option) => handleRemoveMember(option)}
          selecteds={teamMembers}
        />
      </FormContent>
    </Modal>
  );
};

export default ModalCreateTeam;
