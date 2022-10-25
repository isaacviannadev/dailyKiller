import styled from 'styled-components';

export const AutoCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const AutoCompleteResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow-y: auto;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

export const AutoCompleteItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};
  padding: ${({ theme }) => theme.spacing.xxs};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.Radius.xs};

  & .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xxs};

    .avatarImg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => theme.color.main[900]};
      border-radius: 50%;
      color: ${({ theme }) => theme.color.background.darkest};
    }

    .details {
      display: flex;
      flex-direction: column;

      .name {
        font-weight: bold;
      }
      .email {
        font-size: ${({ theme }) => theme.fontsize.xs};
      }
    }
  }

  & .action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    span {
      font-size: ${({ theme }) => theme.fontsize.m};
    }

    .add {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background.default};
  }
`;

export const AutoCompleteSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xxs};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.Radius.xxs};

  .email {
    font-size: ${({ theme }) => theme.fontsize.xs};
  }

  & .action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    span {
      font-size: ${({ theme }) => theme.fontsize.xs};
    }

    .remove {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background.dark};
  }
`;

export const AutoCompleteSelectedList = styled(AutoCompleteResults)`
  gap: ${({ theme }) => theme.spacing.none};
`;
