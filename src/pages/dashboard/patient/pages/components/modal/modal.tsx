import { close } from '@/assets/icons';
import React from 'react';
import styles from './modal.module.css';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
      <div
        onClick={onClose}
        className={styles.close}
      >
        {close()}
      </div>
      <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;


