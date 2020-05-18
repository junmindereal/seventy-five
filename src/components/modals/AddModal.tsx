import React from 'react';
import Modal from 'react-modal';
import Input from '../common/Input';
import Button from '../common/Button';
import {StudentProps} from '../../types';
import {btn} from '../../styles/btn';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

interface AddModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  student: StudentProps;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
  doSubmit: (e: React.FormEvent) => void;
}

const AddModal: React.FC<AddModalProps> = ({
  modalIsOpen,
  closeModal,
  student,
  handleInput,
  doSubmit,
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
        <form onSubmit={doSubmit}>
          <Input
            value={student.firstName}
            name="firstName"
            label="First Name"
            placeholder="Juan"
            onChange={handleInput}
          />
          <Input
            value={student.middleName}
            name="middleName"
            label="Middle Name"
            placeholder="Mercado"
            onChange={handleInput}
          />
          <Input
            value={student.lastName}
            name="lastName"
            label="Last Name"
            placeholder="Dela Cruz"
            onChange={handleInput}
          />
          <Input
            value={student.section}
            name="section"
            label="Section"
            placeholder="3 - Wisdom"
            onChange={handleInput}
          />
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
