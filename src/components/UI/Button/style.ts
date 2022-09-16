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
    padding: ${theme.spacing.xs} ${theme.spacing.sm};

    & .load-icon {
      animation: ${rotate} 1s linear infinite;
  `}
`;

// create animation to icon loading on button
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
