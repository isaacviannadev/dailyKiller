import styled from 'styled-components';

export const LayoutSC = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  height: 100vh;
  width: 100vw;

  main {
    display: grid;
    grid-gap: 20px;
    padding: 20px;

    grid-template-areas:
      'profile motivation'
      'profile description'
      'profile board';

    grid-template-rows: auto auto 1fr;
    grid-template-columns: auto 1fr;

    & div.profile {
      display: grid;
      grid-area: profile;
    }

    & div.motivation {
      display: grid;
      grid-area: motivation;
    }

    & div.description {
      display: grid;
      grid-area: description;
    }

    & div.board {
      display: grid;
      grid-area: board;
    }
  }
`;

export const LogoutButtonSC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.main[700]};
  gap: 6px;

  &:hover {
    color: ${({ theme }) => theme.color.error.dark};
  }
`;
