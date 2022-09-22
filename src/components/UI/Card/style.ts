import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const CardSC = styled.div<CardProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.background.light};
    border-radius: ${theme.Radius.xs};
    width: 100%;
    height: 100%;
    max-height: 800px;
    border: 1px solid ${theme.color.background.darkest};
    overflow: hidden;
  `}
`;

export const CardTitleSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.xs};
    border-bottom: 1px solid ${theme.color.background.darkest};
    margin-bottom: ${theme.spacing.xxs};
    text-align: center;
    margin: 0 20px;

    h2 {
      font-size: ${theme.fontsize.xl};
      font-weight: ${theme.weight.bold};
    }
  `}
`;

export const CardContentSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.xs} 0;
    overflow: auto;
    width: 100%;
    height: 100%;
  `}
`;
