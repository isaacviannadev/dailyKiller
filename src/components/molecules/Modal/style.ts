import styled from 'styled-components';

const crossModalContentSize = {
  full: '100%',
  xs: '20rem',
  sm: '30rem',
  md: '40rem',
  lg: '50rem',
  xl: '60rem',
  xxl: '70rem',
  xxxl: '80rem',
  fluid: 'fit-content',
};

type CrossModalContentProps = {
  size?: keyof typeof crossModalContentSize;
  fullPage?: boolean;
};

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.main<CrossModalContentProps>`
  width: 100%;
  max-width: ${({ fullPage, size }) =>
    !fullPage ? crossModalContentSize[size || 'fluid'] : '100%'};
  height: ${({ fullPage }) => (fullPage ? '100%' : 'auto')};
  background-color: white;
  border-radius: ${({ fullPage, theme }) => (!fullPage ? theme.Radius.xs : 0)};

  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBody = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  justify-content: center;
  align-items: center;
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalTitle = styled.div`
  font-size: ${({ theme }) => theme.fontsize['2xl']};
  font-weight: 600;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;

export const ModalCloseIcon = styled.div`
  width: 20px;
  height: 20px;
`;

export const ModalContentText = styled.div`
  font-size: ${({ theme }) => theme.fontsize['l']};
  font-weight: 500;
`;
