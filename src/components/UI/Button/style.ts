import styled, { css, keyframes } from 'styled-components';

const crossButtonType = {
  primary: css`
    background-color: ${({ theme }) => theme.color.main[900]};
    color: ${({ theme }) => theme.color.background.darkest};
    box-shadow: 4px 4px ${({ theme }) => theme.color.background.darkest};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.background.darkest};
    color: ${({ theme }) => theme.color.main[900]};
    box-shadow: 4px 4px ${({ theme }) => theme.color.main[900]};
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.color.secondary[700]};
    color: ${({ theme }) => theme.color.background.darkest};
    box-shadow: 4px 4px ${({ theme }) => theme.color.main[700]};
  `,
};

const crossButtonSize = {
  sm: css`
    width: fit-content;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontsize.s1};
  `,
  md: css`
    width: fit-content;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontsize.m};
  `,
  lg: css`
    width: fit-content;
    height: 5rem;
    font-size: ${({ theme }) => theme.fontsize.l};
  `,
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type ButtonPropsSC = {
  variant: keyof typeof crossButtonType;
  size: keyof typeof crossButtonSize;
  fullWidth?: boolean;
};

export const StyledButton = styled.button<ButtonPropsSC>`
  ${({ theme, variant, size, fullWidth }) => css`
    border: none;
    border-radius: ${theme.Radius.xxs};
    font-family: ${theme.family.primary};
    font-weight: ${theme.weight.bold};
    padding: 0 ${theme.spacing.sm};
    cursor: pointer;
    transform: translate(-4px, -4px);
    transition: all 0.2s ease;
    position: relative;

    ${crossButtonType[variant]};
    ${crossButtonSize[size]};

    ${fullWidth && `width: 100%;`}

    &:hover,
    &:focus {
      transform: translate(-2px, -2px);
      box-shadow: 3px 3px;
    }
    &:active {
      transform: translate(0, 0);
      box-shadow: 2px 2px;
    }

    span {
      display: inline-block;
      margin: 0 8px;
    }

    .load-icon {
      position: absolute;
      animation: ${rotate} 1s infinite;
      right: 10px;
    }
  `}
`;
