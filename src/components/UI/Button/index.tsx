import { SpinnerGap } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({ children, icon, isLoading, ...props }: IButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
      {isLoading && <SpinnerGap className='load-icon' />}
    </StyledButton>
  );
};

export default Button;
