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
      text-align: center;
      height: 100%;
      gap: ${theme.spacing.md};

      z-index: 3;
    }

    & .ladoA {
      justify-content: space-between;

      & img {
        width: 100%;
      }
      h1 {
        line-height: 1;
        font-size: ${theme.fontsize['4xl']};
      }
    }
    & .ladoB {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 100%;
      min-width: 50%;
      height: 100%;
      overflow: hidden;
      padding: 0;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 500px;
      height: 600px;
      background: url(/assets/ellipse.svg) no-repeat;
    }

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;

      & .ladoA {
        padding: ${theme.spacing.xl};
        align-items: flex-start;
        text-align: left;
        width: 50%;
        min-width: 50%;
        justify-content: space-between;
      }
      & .ladoB {
        & img {
          margin-bottom: -100px;
        }
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


