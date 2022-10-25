import styled from 'styled-components';
import { CrossInputProps } from '.';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontsize.s1};
  font-weight: ${({ theme }) => theme.weight.semibold};
  color: ${({ theme }) => theme.color.main[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;

export const InputField = styled.input<CrossInputProps>`
  width: 100%;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.color.background.dark};
  border-radius: ${({ theme }) => theme.Radius.xxs};
  padding: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontsize.s1};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.main[800]};
  outline: none;
  transition: all 0.2s ease-in-out;

  &.error {
    border-color: ${({ theme }) => theme.color.error.default};
    color: ${({ theme }) => theme.color.error.default};
  }

  &.error:focus {
    border-color: ${({ theme }) => theme.color.error.dark};
  }

  &:focus:not(.error) {
    border: 2px solid ${({ theme }) => theme.color.background.darkest};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.main[500]};
  }

  &:disabled {
    border: 2px solid ${({ theme }) => theme.color.main[300]};
    color: ${({ theme }) => theme.color.main[300]};
    cursor: not-allowed;
  }
`;

export const InputError = styled.span`
  font-size: ${({ theme }) => theme.fontsize.s1};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.color.error.default};
`;


export const InputIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const InputWrapperWithIcon = styled.div`
  position: relative;
`;
