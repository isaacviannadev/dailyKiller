import styled, { css } from 'styled-components';

type DividerProps = {
  type?: 'horizontal' | 'vertical';
  color?: 'default' | 'secondary' | 'tertiary';
};

const crossDividerType = {
  horizontal: css`
    width: 100%;
    height: 2px;
    margin: ${({ theme }) => theme.spacing.xxs} 0;
  `,
  vertical: css`
    width: 2px;
    height: 100%;
    margin: 0 ${({ theme }) => theme.spacing.xxs};
  `,
};

const crossDividerColor = {
  default: css`
    background-color: ${({ theme }) => theme.color.background.darkest};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.main[500]};
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.color.secondary[700]};
  `,
};

const DividerSC = styled.div<DividerProps>`
  ${({ theme, type, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.Radius.sm};
    ${crossDividerType[type || 'horizontal']}
    ${crossDividerColor[color || 'default']}
  `}
`;

const Divider = ({ type, color }: DividerProps) => {
  return <DividerSC type={type} color={color} />;
};

export default Divider;
