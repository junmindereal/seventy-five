import React from 'react';
import {btn} from '../../styles/btn';
import {Icon} from '@iconify/react';
import userPlus from '@iconify/icons-uil/user-plus';
import AddModal from '../modals/AddModal';

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
      <AddModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </React.Fragment>
  );
};

export default AddStudent;
