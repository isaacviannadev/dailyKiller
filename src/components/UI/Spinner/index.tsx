import { SpinnerSC } from './styles';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'default';
};

const Spinner = ({ size = 'default' }: SpinnerProps) => {
  return <SpinnerSC size={size} />;
};

export default Spinner;
