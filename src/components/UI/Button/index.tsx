import { SpinnerGap } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'lg' | 'md';
  fullWidth?: boolean;
}

const Button = ({
  children,
  icon,
  isLoading,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      <span>{children}</span>
      {isLoading && <SpinnerGap className='load-icon' size={24} />}
    </StyledButton>
  );
};

export default Button;
