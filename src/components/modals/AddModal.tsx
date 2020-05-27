import React from 'react';
import Modal from 'react-modal';
import Button from '../common/Button';
import Input from '../common/Input';
import {AddModalProps} from '../../types';
import {btn} from '../../styles/btn';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {Icon} from '@iconify/react';
import multiplyIcon from '@iconify/icons-uil/multiply';

const AddModal: React.FC<AddModalProps> = ({
  modalIsOpen,
  closeModal,
  handleChange,
  handleSubmit,
  handleReset,
  formState,
  error,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={150}
      className={`${modal.modal} ${modal.modalAdd}`}
      ariaHideApp={false}
    >
      <div className={modal.container}>
        <header className={modal.header}>
          <h2 className={modal.heading}>Add Student Form</h2>
          <Button
            className={modal.close}
            onClick={closeModal}
            label={<Icon icon={multiplyIcon} />}
          />
        </header>
        <form onSubmit={handleSubmit}>
          <Input
            value={formState.firstName}
            name="firstName"
            label="First Name"
            placeholder="Juan"
            onChange={handleChange}
            error={error.firstName}
          />
          <Input
            value={formState.middleName}
            name="middleName"
            label="Middle Name"
            placeholder="Mercado"
            onChange={handleChange}
            error={error.middleName}
          />
          <Input
            value={formState.lastName}
            name="lastName"
            label="Last Name"
            placeholder="Dela Cruz"
            onChange={handleChange}
            error={error.lastName}
          />
          <Input
            value={formState.section}
            name="section"
            label="Section"
            placeholder="3 - Wisdom"
            onChange={handleChange}
            error={error.section}
          />
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
              label="Add Student"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddModal;
