import styled, { css } from 'styled-components';

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
};

const crossButtonSize = {
  sm: css`
    width: 4rem;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontsize.s1};
  `,
  md: css`
    width: 6rem;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontsize.m};
  `,
  lg: css`
    width: 8rem;
    height: 5rem;
    font-size: ${({ theme }) => theme.fontsize.l};
  `,
};

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
    gap: ${theme.spacing.xxs};
    position: relative;
    transform: translate(-4px, -4px);
    transition: all 0.2s ease;

    ${crossButtonType[variant]};
    ${crossButtonSize[size]};

    ${fullWidth && `width: 100%;`}

    &:hover {
      transform: translate(0, 0);
      box-shadow: 2px 2px;
    }
  `}

  span {
    display: inline-block;
    height: auto;
    line-height: 3;
  }
`;
