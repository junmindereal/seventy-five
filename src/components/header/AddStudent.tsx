import React from 'react';
import Modal from 'react-modal';
import {styles} from '../../styles/header';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';

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
        className={styles.modal}
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddStudent;
