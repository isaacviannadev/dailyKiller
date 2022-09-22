import styled, { css } from 'styled-components';

const BoxSC = styled.div<BoxProps>`
  ${({ theme, padding }) => css`
    display: flex;
    place-items: center;
    width: 100%;
    height: 100%;

    padding: ${padding ? padding : theme.spacing.none};
  `}
`;

type BoxProps = {
  children: React.ReactNode;
  padding?: string;
};

const Box = ({ children, padding }: BoxProps) => {
  return <BoxSC padding={padding}>{children}</BoxSC>;
};

export default Box;
