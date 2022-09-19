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
      <span>{children}</span>
      {isLoading && <SpinnerGap className='load-icon' size={24} />}
    </StyledButton>
  );
};

export default Button;
