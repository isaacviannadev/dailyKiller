import { CircleNotch } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
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
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      <span>{children}</span>
      {isLoading && <CircleNotch className='load-icon' size={20} />}
    </StyledButton>
  );
};

export default Button;
