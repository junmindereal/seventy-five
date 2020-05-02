import React from 'react';
import Modal from 'react-modal';
import {styles} from '../../styles/header';
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
      <button className={styles.button} onClick={openModal}>
        <Icon className={styles.buttonIcon} icon={userPlus}></Icon>
        <span className={styles.buttonText}>Add Student</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={150}
        className={styles.modal}
      >
        <div className={styles.modalContainer}>
          <header className={styles.modalHeader}>
            <h2 className={styles.modalHeading}>Add Student</h2>
            <button className={styles.modalClose} onClick={closeModal}>
              <Icon icon={multiplyIcon} />
            </button>
          </header>
          <form>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="firstName">
                First Name
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="firstName"
                placeholder="Juan"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="middleName">
                Middle Name
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="middleName"
                placeholder="Mercado"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="lastName">
                Last Name
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="lastName"
                placeholder="Dela Cruz"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="section">
                Section
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="sectionk"
                placeholder="3 - Wisdom"
              />
            </div>
            <div className={styles.action}>
              <button
                className={styles.cancel}
                onClick={closeModal}
                type="button"
              >
                Cancel
              </button>
              <button className={styles.submit} type="submit">
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
