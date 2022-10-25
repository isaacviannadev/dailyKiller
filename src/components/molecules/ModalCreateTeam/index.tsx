import { useAuth } from '../../../hooks/useAuth';
import Button from '../../UI/Button';
import { Input } from '../../UI/Input';
import Modal from '../../UI/Modal';
import { FormContent, FormInputRow } from './style';

type ModalCreateTeamProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalCreateTeam = ({ isOpen, onClose }: ModalCreateTeamProps) => {
  const { user } = useAuth();

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
    name: '',
    description: '',
    members: [],
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

  return (
    <Modal
      size='lg'
      title='Criar time'
      isOpen={isOpen}
      onClose={onClose}
      footer={Footer}
    >
      <FormContent>
        <Input label='Nome do time' placeholder='Digite o nome do time' />
        <Input label='Descrição' placeholder='Digite a descrição do time' />
        <FormInputRow>
          <Input label='Senha' placeholder='Digite a senha do time' />
          <Input
            label='Confirme a senha'
            placeholder='Digite a senha do time'
          />
        </FormInputRow>
      </FormContent>
    </Modal>
  );
};

export default ModalCreateTeam;
