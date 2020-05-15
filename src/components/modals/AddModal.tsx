import React from 'react';
import Modal from 'react-modal';
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
          <button className={modal.close} onClick={closeModal}>
            <Icon icon={multiplyIcon} />
          </button>
        </header>
        <form>
          <div className={form.group}>
            <label className={form.label} htmlFor="firstName">
              First Name
            </label>
            <input
              className={form.input}
              type="text"
              id="firstName"
              placeholder="Juan"
            />
          </div>
          <div className={form.group}>
            <label className={form.label} htmlFor="middleName">
              Middle Name
            </label>
            <input
              className={form.input}
              type="text"
              id="middleName"
              placeholder="Mercado"
            />
          </div>
          <div className={form.group}>
            <label className={form.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              className={form.input}
              type="text"
              id="lastName"
              placeholder="Dela Cruz"
            />
          </div>
          <div className={form.group}>
            <label className={form.label} htmlFor="section">
              Section
            </label>
            <input
              className={form.input}
              type="text"
              id="sectionk"
              placeholder="3 - Wisdom"
            />
          </div>
          <div className={form.action}>
            <button className={btn.tertiary} onClick={closeModal} type="button">
              Cancel
            </button>
            <button className={`${btn.primary} ${form.submit}`} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddModal;
