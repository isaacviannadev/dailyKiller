import styled, { css } from 'styled-components';

export const ProfileCardWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const ProfileCardSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px ${theme.spacing.xs} ${theme.spacing.xs};
    background-color: ${theme.color.background.light};
    border-radius: ${theme.Radius.xs};
    border: 1px solid ${theme.color.background.darkest};
    width: 100%;
    height: 100%;
    min-width: 300px;
  `}
`;

export const AvatarSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 120px;
    max-height: 120px;
    border-radius: 50%;
    border: 3px solid ${theme.color.background.darkest};
    overflow: hidden;
    margin-bottom: -60px;
    background-color: ${theme.color.background.light};
    z-index: 1;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileCardInfoDivSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  gap: 20px;

  small {
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
    align-self: end;
  }
`;

export const ProfileCardInfoSC = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;

    span {
      font-size: ${theme.fontsize.xs};
      color: ${theme.color.main[500]};
    }

    p {
      font-size: ${theme.fontsize.xs};
      color: ${theme.color.main[800]};
      margin: 0;
    }
  `}
`;
