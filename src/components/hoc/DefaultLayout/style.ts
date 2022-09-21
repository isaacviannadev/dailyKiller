import styled from 'styled-components';

export const LayoutSC = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  height: 100vh;
  width: 100vw;
`;

export const ContentSc = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas:
    'profile motivation'
    'profile description'
    'profile board';
`;

export const LogoutButtonSC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.main[700]};

  &:hover {
    color: ${({ theme }) => theme.color.error.dark};
  }
`;
