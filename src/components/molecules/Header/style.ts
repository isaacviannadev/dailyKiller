import styled, { css } from 'styled-components';

export const HeaderSC = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.sm};
    background-color: ${theme.color.background.light};
    border-bottom: 2px solid ${theme.color.background.darkest};
    min-height: 60px;

    & > a img {
      width: 140px;
    }
  `}
`;
