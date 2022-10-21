import { X } from 'phosphor-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalBody,
  ModalCloseButton,
  ModalCloseIcon,
  ModalContent,
  ModalContentText,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from './style';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'full'
    | 'fluid'
    | undefined;
  fullPage?: boolean;
}

const Modal = ({
  children,
  isOpen,
  title,
  footer,
  size,
  fullPage = false,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalWrapper>
        <ModalContent size={size} fullPage={fullPage}>
          <ModalHeader>
            {title ? <ModalTitle>{title}</ModalTitle> : <div></div>}
            <ModalCloseButton onClick={onClose}>
              <ModalCloseIcon>
                <X size={20} />
              </ModalCloseIcon>
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <ModalContentText>{children}</ModalContentText>
          </ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('modal-root') as Element
  );
};

export default Modal;
