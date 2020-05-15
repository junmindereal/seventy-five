import React from 'react';
import Modal from 'react-modal';
import Input from '../common/Input';
import Button from '../common/Button';
import {btn} from '../../styles/btn';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

interface AddModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const AddModal: React.FC<AddModalProps> = ({modalIsOpen, closeModal}) => {
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
        <form>
          <Input name="firstName" label="First Name" placeholder="Juan" />
          <Input name="middleName" label="Middle Name" placeholder="Mercado" />
          <Input name="lastName" label="Last Name" placeholder="Dela Cruz" />
          <Input name="section" label="Section" placeholder="3 - Wisdom" />
          <div className={form.action}>
            <Button
              className={btn.tertiary}
              label="Cancel"
              onClick={closeModal}
            />
            <Button
              className={`${btn.primary} ${form.submit}`}
              label="Submit"
              onClick={closeModal}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddModal;
