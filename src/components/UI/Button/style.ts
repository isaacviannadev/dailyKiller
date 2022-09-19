import styled, { css, keyframes } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.color.main[500]};
    border: none;
    border-radius: ${theme.Radius.xxs};
    color: ${theme.color.main[100]};
    cursor: pointer;
    font-family: ${theme.family.secondary};
    font-size: ${theme.fontsize.m};
    font-weight: ${theme.weight.bold};
    padding:0 ${theme.spacing.sm};
    
    span {
      display: inline-block;
      height: auto;
      line-height: 3;
    }

    & .load-icon {
      animation: ${rotate} 1s linear infinite;
  `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
