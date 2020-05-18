import React from 'react';
import Modal from 'react-modal';
import Button from '../common/Button';
import {btn} from '../../styles/btn';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

interface AddModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

const AddModal: React.FC<AddModalProps> = ({
  modalIsOpen,
  closeModal,
  handleSubmit,
  children,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={150}
      className={modal.modal}
      ariaHideApp={false}
    >
      <div className={modal.container}>
        <header className={modal.header}>
          <h2 className={modal.heading}>Add Student</h2>
          <Button
            className={modal.close}
            onClick={closeModal}
            label={<Icon icon={multiplyIcon} />}
          />
        </header>
        <form onSubmit={handleSubmit}>
          {children}
          <div className={form.action}>
            <Button
              className={btn.tertiary}
              label="Cancel"
              onClick={closeModal}
            />
            <Button
              className={`${btn.primary} ${form.submit}`}
              label="Submit"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddModal;
