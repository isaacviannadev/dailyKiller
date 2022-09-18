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
    padding: ${theme.spacing.sm};

    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.xl};
    }
  `}
`;

export const CardPrincipalSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: ${theme.color.background.dark};
    border-radius: ${theme.Radius.lg};
    position: relative;
    overflow: hidden;

    & .ladoA,
    & .ladoB {
      display: flex;
      flex-direction: column;
      padding: ${theme.spacing.xs};
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      gap: ${theme.spacing.md};

      z-index: 3;
    }

    & .ladoB {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      min-width: 50%;
      height: 100%;
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: -40px;
      right: 0;
      width: 260px;
      height: 200px;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      background: ${theme.color.background.darkest};
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 100px;
      right: -65px;
      width: 180px;
      height: 180px;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      transform: rotate(-30deg);
      z-index: 1;

      background: ${theme.color.background.darkest};
    }

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;

      & .ladoA {
        padding: ${theme.spacing.xl};
        align-items: flex-start;
        text-align: left;
        width: 50%;
        justify-content: space-between;
      }
      & .ladoB {
        padding: 0 ${theme.spacing.xl};
      }
    }
  `}
`;

export const DivButtonHomeSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      width: 100%;
    }

    small {
      font-size: ${theme.fontsize.xs};
      opacity: ${theme.opacity.medium};
    }

    small b {
      color: ${theme.color.error.default};
    }

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 600px;

      align-items: start;

      button {
        width: fit-content;
      }
    }
  `}
`;


