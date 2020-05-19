import React from 'react';
import Modal from 'react-modal';
import Button from '../common/Button';
import {UpdateModalProps} from '../../types';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

const UpdateModal: React.FC<UpdateModalProps> = ({
  modalIsOpen,
  closeModal,
  lastName,
  firstName,
}) => {
  const handleReset = (): void => {
    console.log('Reset');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={150}
      className={`${modal.modal} ${modal.modalUpdate}`}
      ariaHideApp={false}
    >
      <div className={modal.container}>
        <header className={modal.header}>
          <h2 className={modal.heading}>{`${lastName}, ${firstName}`}</h2>
          <Button
            className={modal.close}
            onClick={closeModal}
            label={<Icon icon={multiplyIcon} />}
          />
        </header>
        <form>
          <div className={form.action}>
            <Button
              className={`${btn.secondary} ${btn.reset}`}
              label="Reset"
              onClick={handleReset}
            />
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

export default UpdateModal;
