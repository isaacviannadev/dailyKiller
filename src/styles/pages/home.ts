import styled, { css } from 'styled-components';

export const ContainerSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: ${theme.color.background.default};
  `}
`;

export const CardPrincipalSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 80%;
    width: 80%;
    background: ${theme.color.background.dark};
    border-radius: ${theme.Radius.xl};
    box-shadow: 2px 4px 12px -5px rgba(0, 0, 0, 0.7);
    padding: ${theme.spacing.xl};
  `}
`;
