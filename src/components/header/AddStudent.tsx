import React from 'react';
import Modal from 'react-modal';
import {btn} from '../../styles/btn';
import {modal} from '../../styles/modal';
import {form} from '../../styles/form';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';
import multiplyIcon from '@iconify/icons-uil/multiply';

const AddStudent: React.SFC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <button className={btn.secondary} onClick={openModal}>
        <Icon className={btn.secondaryIcon} icon={userPlus}></Icon>
        <span className={btn.secondaryText}>Add Student</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={150}
        className={modal.modal}
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
              <button
                className={btn.tertiary}
                onClick={closeModal}
                type="button"
              >
                Cancel
              </button>
              <button className={`${btn.primary} ${form.submit}`} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AddStudent;
