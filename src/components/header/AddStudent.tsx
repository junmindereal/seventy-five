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
        closeTimeoutMS={200}
        className={styles.modal}
      >
        <h2 className={styles.modalHeading}>Add Student</h2>
        <button className={styles.modalClose} onClick={closeModal}>
          <Icon icon={multiplyIcon} />
        </button>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Juan" />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" placeholder="Mercado" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Dela Cruz" />
          </div>
          <div>
            <label htmlFor="section">Section</label>
            <input type="text" id="sectionk" placeholder="3 - Wisdom" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddStudent;
