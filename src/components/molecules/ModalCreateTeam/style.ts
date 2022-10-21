import styled from 'styled-components';

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 300px;
  overflow-y: auto;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const FormInputRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
`;
