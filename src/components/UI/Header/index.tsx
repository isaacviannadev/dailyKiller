/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { SmileyXEyes } from 'phosphor-react';
import { useAuth } from '../../../hooks/useAuth';
import { LogoutButtonSC } from '../../hoc/DefaultLayout/style';
import Tooltip from '../Tooltip';
import { HeaderSC } from './style';

const Header = () => {
  const { signOut } = useAuth();

  return (
    <HeaderSC>
      <Link href='/'>
        <a>
          <img src='/assets/dklogo.svg' alt='logo dk' />
        </a>
      </Link>
      <Tooltip content='Ir embora!'>
        <LogoutButtonSC onClick={signOut}>
          <SmileyXEyes size={24} />
        </LogoutButtonSC>
      </Tooltip>
    </HeaderSC>
  );
};

export default Header;
